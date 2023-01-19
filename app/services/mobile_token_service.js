import messaging from '@react-native-firebase/messaging';
import NetInfo from '@react-native-community/netinfo';
import {Platform} from 'react-native';
import MobileTokenApi from '../api/mobileTokenApi';
import AsyncStorageService from './async_storage_service';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notification from '../models/Notification';

const TOKEN_KEY = 'registeredToken';

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

    if (enabled) {
      messaging()
        .getToken()
        .then(token => {
          AsyncStorageService.setItem('FCM_TOKEN', token);

          _handleToken(token);
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
  }

  function handleSyncingToken() {
    if (Platform.OS == 'ios') {
      // iOS the isInternetReachable will return as null on app launches, using event listener in order to get the true/false value.
      const unsubscribe = NetInfo.addEventListener(state => {
        if (state.isConnected && state.isInternetReachable) {
          unsubscribe();
          requestUserPermission();
        }
      });
      return;
    }

    NetInfo.fetch().then(state => {
      if (state.isConnected && state.isInternetReachable)
        requestUserPermission();
    });
  }

  async function _handleToken(token) {
    AsyncStorage.getItem(TOKEN_KEY, (error, storageToken) => {
      if(!storageToken) { return _sendToken(token); }

      let jsonValue = JSON.parse(storageToken) || {};
      if(jsonValue.token != token || jsonValue.app_version != DeviceInfo.getVersion()) {
        _sendToken(token, jsonValue.id);
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
      }
    };

    Api.post(Api.listingUrl(), data, function(res) {
      AsyncStorageService.setItem(TOKEN_KEY, res);
    });
  }

})();

export default MobileTokenService;