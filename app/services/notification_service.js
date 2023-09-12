import messaging from '@react-native-firebase/messaging';
import Notification from '../models/Notification';

const notificationService = (() => {
  return {
    onNotificationArrived,
    onNotificationOpenedApp,
  }

  // 
  function onNotificationArrived(callback) {
    // when the receiving push notification in the app is in background or terminated
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('== 1. == set background message handler = ', remoteMessage);
      _saveNotification(remoteMessage);
      !!callback && callback();
    });

    // when receiving push notification (this method is not get called in background state or quit state)
    messaging().onMessage(async remoteMessage => {
      console.log('== 2. == On message = ', remoteMessage);
      _saveNotification(remoteMessage);

      !!callback && callback();
    });
  }

  function onNotificationOpenedApp(callback) {
    // when the notification open the app from a background state
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('== 3. == On notification opened app = ', remoteMessage);
      if (remoteMessage)
        _saveNotification(remoteMessage);

      !!callback && callback();
    });

    // when the notification opened the app from a quit state
    // This method get called when the app launched without receiving any push notification
    messaging().getInitialNotification()
      .then(async remoteMessage => {
        console.log('== 4. == get initial notification (from quit state) = ', remoteMessage);
        if (remoteMessage) {
          _saveNotification(remoteMessage);
          !!callback && callback();
        }
      })
  }

  function _saveNotification(remoteMessage) {
    const message = Notification.findById(remoteMessage.messageId);
    if(!!message) return;

    let data = null;
    if (Object.keys(remoteMessage.data).length > 0)
      data = JSON.parse(remoteMessage.data.payload) || null;

    Notification.create({...remoteMessage.notification, data: data});
  }

})();

export default notificationService;