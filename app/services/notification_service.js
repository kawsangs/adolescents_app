import messaging from '@react-native-firebase/messaging';
import Notification from '../models/Notification';
import User from '../models/User';
import surveyService from './survey_service';
import {navigationRef} from '../navigators/app_navigator';
import visitService from './visit_service';

const notificationService = (() => {
  return {
    onNotificationArrivedInBackground,
    onNotificationArrivedInForeground,
    onNotificationOpenedApp,
  }

  // when receiving push notification when the app is in background or terminated (works when called in the index.js)
  function onNotificationArrivedInBackground() {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('== 1. == set background message handler = ', remoteMessage);
      _saveNotificationAndSurvey(remoteMessage);
    });
  }

  // when receiving push notification when the app is in foreground (works when called in the App.js)
  function onNotificationArrivedInForeground(callback) {
    messaging().onMessage(async remoteMessage => {
      console.log('== 2. == On message = ', remoteMessage);
      _saveNotificationAndSurvey(remoteMessage);
      !!callback && callback();
    });
  }

  function onNotificationOpenedApp() {
    // when the notification open the app from a background state (worked)
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('== 3. == On notification opened app = ', remoteMessage);
      _handleScreenNavigation(remoteMessage);
    });

    // when the notification opened the app from a quit state (worked)
    // This method also get called when the app launched without receiving any push notification
    messaging().getInitialNotification()
      .then(async remoteMessage => {
        console.log('== 4. == get initial notification (from quit state) = ', remoteMessage);
        _handleScreenNavigation(remoteMessage);
      })
  }

  function _saveNotificationAndSurvey(remoteMessage) {
    const message = Notification.findById(remoteMessage.messageId);
    if(!!message) return;

    let data = null;
    if (Object.keys(remoteMessage.data).length > 0)
      data = JSON.parse(remoteMessage.data.payload) || null;

    if (!!data.form_id)
      surveyService.findAndSave(data.form_id);

    Notification.create({...remoteMessage.notification, data: data});
  }

  function _handleScreenNavigation(remoteMessage) {
    if (Object.keys(remoteMessage.data).length > 0) {
      const data =  JSON.parse(remoteMessage.data.payload)
      if (!!data.form_id) {
        _navigateToSurveyScreen(remoteMessage, data);
        return
      }
    }
    _navigateToNextScreen('NotificationView');
  }

  function _navigateToSurveyScreen(remoteMessage, data) {
    const notification = Notification.findById(remoteMessage.notification.id);
    const visitParams = {
      pageable_type: 'NotificationOccurrence',
      pageable_id: data.notification_occurrence_id,
      code: 'open_remote_notification',
      name: 'Open remote notification',
    };
    visitService.recordVisitAction(visitParams);
    !!notification && _navigateToNextScreen('SurveyView', { uuid: notification.uuid, form_id: data.form_id, title: remoteMessage.notification.title });
  }

  function _navigateToNextScreen(screenName, params) {
    if (!!User.currentLoggedIn()) {
      setTimeout(() => {
        navigationRef.current?.navigate(screenName, params);
      }, 100);
    }
  }
})();

export default notificationService;