import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';
import MobileTokenApi from '../api/mobileTokenApi';
import AsyncStorageService from './async_storage_service';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notification from '../models/Notification';
import {REGISTERED_TOKEN, TOKEN_SYNCED} from '../constants/async_storage_constant';

const MobileTokenService = (() => {
  const Api = new MobileTokenApi();

  return {
    handleSyncingToken: handleSyncingToken,
    onNotificationOpenApp: onNotificationOpenApp,
    onNotificationArrived: onNotificationArrived
  }

  function onNotificationArrived(callback) {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      _upsertToMessage(remoteMessage);

      !!callback && callback();
    });

    messaging().onMessage(async remoteMessage => {
      _upsertToMessage(remoteMessage);

      !!callback && callback();
    });
  }

  function _upsertToMessage(remoteMessage) {
    message = Notification.findById(remoteMessage.messageId);

    if(!!message) return;

    params = {
      id: remoteMessage.messageId,
      title: remoteMessage.notification.title,
      content: remoteMessage.notification.body
    }

    Notification.create(params)
  }

  function onNotificationOpenApp(callback) {
    messaging().onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage)
        _upsertToMessage(remoteMessage);

      callback();
    });

    messaging()
      .getInitialNotification()
      .then(async remoteMessage => {
        if (remoteMessage) {
          _upsertToMessage(remoteMessage);
          callback();
        }
      })
  }

  async function requestUserPermission(retryCount = 1) {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    AsyncStorage.getItem(TOKEN_SYNCED, (error, synced) => {
      if (enabled) {
        messaging()
          .getToken()
          .then(token => {
            console.log('== fCM token = ', token)
            AsyncStorageService.setItem('FCM_TOKEN', token);
            _handleToken(token, synced);
          })
          .catch(error => {
            // if it reaches the max retry attempt or the error is not SERVICE_NOT_AVAILABLE then exit
            if (retryCount === 0 || !error.toString().includes("SERVICE_NOT_AVAILABLE"))
              return;

            if (error.toString().includes("SERVICE_NOT_AVAILABLE")) {
              setTimeout(() => {
                requestUserPermission(retryCount - 1);
              }, 5000);
            }
          });
      }
    })
  }

  function handleSyncingToken() {
    requestUserPermission();
  }

  async function _handleToken(firebaseToken, synced) {
    AsyncStorage.getItem(REGISTERED_TOKEN, (error, storageTokenValue) => {
      if(!storageTokenValue) { return _sendToken(firebaseToken); }

      let storageToken = JSON.parse(storageTokenValue) || {};
      if(!synced || storageToken.token != firebaseToken || storageToken.app_version != DeviceInfo.getVersion()) {
        _sendToken(firebaseToken, storageToken.id);
      }
    })
  }

  async function _sendToken(token, id=null) {
    let data =  {
      mobile_token: {
        token: token,
        device_id: await DeviceInfo.getUniqueId(),
        device_type: DeviceInfo.isTablet() ? 'tablet' : 'mobile',
        app_version: DeviceInfo.getVersion(),
        platform: Platform.OS,
        device_os: `${DeviceInfo.getSystemName()}_${DeviceInfo.getSystemVersion()}`
      }
    };

    DeviceInfo.getManufacturer().then((manufacturer) => {
      data['mobile_token']['device_os'] = `${manufacturer}_${DeviceInfo.getSystemName()}_${DeviceInfo.getSystemVersion()}`
      Api.post(Api.listingUrl(), data, function(res) {
        AsyncStorageService.setItem(REGISTERED_TOKEN, res);
        AsyncStorageService.setItem(TOKEN_SYNCED, 'true');
      });
    })
    .catch((error) => {
      Api.post(Api.listingUrl(), data, function(res) {
        AsyncStorageService.setItem(REGISTERED_TOKEN, res);
        AsyncStorageService.setItem(TOKEN_SYNCED, 'true');
      });
    })
  }
})();

export default MobileTokenService;