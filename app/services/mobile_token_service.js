import messaging from '@react-native-firebase/messaging';
import NetInfo from '@react-native-community/netinfo';
import MobileTokenApi from '../api/mobileTokenApi';
import AsyncStorageService from './async_storage_service';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'registeredToken';

const MobileTokenService = (() => {
  const Api = new MobileTokenApi();

  return {
    handleSyncingToken: handleSyncingToken,
    onNotificationOpenApp: onNotificationOpenApp
  }

  function onNotificationOpenApp(callback) {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification caused app to open from background state:--------', remoteMessage);

      callback();
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:=========', remoteMessage);

          callback();
        }
      });
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      // console.log('Authorization status____________:', authStatus);
      messaging()
        .getToken()
        .then(token => {
          console.log('== firebase token == ', token)

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
        device_type: DeviceInfo.getDeviceType(),
        app_version: DeviceInfo.getVersion()
      }
    };

    Api.post(Api.listingUrl(), data, function(res) {
      AsyncStorageService.setItem(TOKEN_KEY, res);
    });
  }

})();

export default MobileTokenService;
