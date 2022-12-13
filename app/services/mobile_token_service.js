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

  async function requestUserPermission() {
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
        });
    }
  }

  function handleSyncingToken() {
    NetInfo.fetch().then(state => {
      if (state.isConnected)
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

  function _sendToken(token, id=null) {
    let data =  {
      mobile_token: {
        token: token,
        device_id: DeviceInfo.getDeviceId(),
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