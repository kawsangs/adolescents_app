import React, { useEffect } from 'react';
import { View } from 'react-native';

import { navigationRef } from '../../navigators/app_navigator';
import appStatusService from '../../services/app_status_service';
import navigationUtil from '../../utils/navigation_util';

import { useSelector, useDispatch } from 'react-redux'
import { refreshNotification } from '../../features/notifications/unreadNotificationsSlice'
import Notification from '../../models/Notification';
import messaging from '@react-native-firebase/messaging';

const MainView = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const initialNavigation = async () => {
      navigationRef.current?.reset({ index: 0, routes: [{ name: await navigationUtil.getInitialRouteName() }] });
      appStatusService.handleAppLaunchingStatus();
    }

    initialNavigation();
  }, []);

  const _upsertToMessage = (remoteMessage) => {
    message = Notification.findById(remoteMessage.messageId);

    if(!!message) return;

    params = {
      id: remoteMessage.messageId,
      title: remoteMessage.notification.title,
      content: remoteMessage.notification.body
    }

    Notification.create(params)
    dispatch(refreshNotification())
  }

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!*********', remoteMessage);
    _upsertToMessage(remoteMessage);
  });

  messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!*********', remoteMessage);
    _upsertToMessage(remoteMessage);
  });

  return <View/>
}

export default MainView;