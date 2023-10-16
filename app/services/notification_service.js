import messaging from '@react-native-firebase/messaging';
import Notification from '../models/Notification';
import User from '../models/User';
import SurveyForm from '../models/SurveyForm';
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
      .then( remoteMessage => {
        console.log('== 4. == get initial notification (from quit state) = ', remoteMessage);
        _saveNotificationAndSurvey(remoteMessage);
        _handleScreenNavigation(remoteMessage);
      })
  }

  // private method
  function _saveNotificationAndSurvey(remoteMessage) {
    if (!!remoteMessage && Object.keys(remoteMessage.data).length > 0) {
      const payload =  JSON.parse(remoteMessage.data.payload) || null;
      if (!payload) return;

      if (!Notification.findById(payload.mobile_notification_id))
        Notification.create({...remoteMessage.notification, id: payload.mobile_notification_id, data: payload});

      if (!!payload.topic_id && !SurveyForm.findById(payload.topic_id))
        surveyService.findAndSave(payload.topic_id);
    }
  }

  function _handleScreenNavigation(remoteMessage) {
    if (!!remoteMessage && Object.keys(remoteMessage.data).length > 0) {
      const payload =  JSON.parse(remoteMessage.data.payload) || null;
      if (!payload) return;

      const notification = Notification.findById(payload.mobile_notification_id);
      if (!!payload.topic_id && !!notification) {
        _navigateToSurveyScreen(payload.topic_id, notification);
        return
      }
      !!notification && _navigateToNextScreen('NotificationView');
    }
  }

  function _navigateToSurveyScreen(topicId, notification) {
    // const visitParams = {
    //   pageable_type: 'NotificationOccurrence',
    //   pageable_id: data.notification_occurrence_id,
    //   code: 'open_remote_notification',
    //   name: 'Open remote notification',
    // };
    // visitService.recordVisitAction(visitParams);
    !!notification && _navigateToNextScreen('SurveyView', { uuid: notification.uuid, topic_id: topicId, title: notification.title });
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