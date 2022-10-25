import messaging from '@react-native-firebase/messaging';
import NetInfo from '@react-native-community/netinfo';
import MobileTokenApi from '../api/mobileTokenApi';
import AsyncStorageService from './async_storage_service';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotificationMessage from '../models/NotificationMessage';

const TOKEN_KEY = 'registeredToken';

const MobileTokenService = (() => {
  return {
    handleSyncingToken: handleSyncingToken,
    onHavingNotification: onHavingNotification
  }

  function onHavingNotification() {
    // messaging().onNotificationOpenedApp(remoteMessage => {
    //   console.log(
    //     'Notification caused app to open from background state:--------',
    //     remoteMessage,
    //   );
    //   // remoteMessage
    //   // {"collapseKey": "kh.org.childhelpline.youthhealth", "data": {}, "from": "405691551008", "messageId": "0:1666680844736051%083c30f7083c30f7", "notification": {"android": {}, "body": "asdf", "title": "tsets"}, "sentTime": 1666680844717, "ttl": 2419200}
    // });

    // // Check whether an initial notification is available
    // messaging()
    //   .getInitialNotification()
    //   .then(remoteMessage => {
    //     if (remoteMessage) {
    //       console.log(
    //         'Notification caused app to open from quit state:=========',
    //         remoteMessage.notification,
    //       );
    //     }
    //   });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!*********', remoteMessage);
      _upsertToMessage(remoteMessage);
    });

    messaging().onMessage(async remoteMessage => {
      console.log('--===---A new FCM message arrived!', JSON.stringify(remoteMessage));
      _upsertToMessage(remoteMessage);
    });
  }

  function _upsertToMessage(remoteMessage) {
    message = NotificationMessage.findById(remoteMessage.messageId);

    if(!!message) return;

    params = {
      id: remoteMessage.messageId,
      title: remoteMessage.notification.title,
      content: remoteMessage.notification.body
    }

    NotificationMessage.create(params);
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
    // console.log("==================NotificationMessage.getAll, ", NotificationMessage.getAll().length)
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

    let Api = new MobileTokenApi();

    Api.post(Api.listingUrl(), data, function(res) {
      AsyncStorageService.setItem(TOKEN_KEY, res);
    });
  }

})();

export default MobileTokenService;
