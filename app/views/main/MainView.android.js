import React, { useEffect } from 'react';
import { View } from 'react-native';

import { navigationRef } from '../../navigators/app_navigator';
import appStatusService from '../../services/app_status_service';
import navigationUtil from '../../utils/navigation_util';

import { useDispatch } from 'react-redux';
import { increaseNotification } from '../../features/notifications/unreadNotificationsSlice'

import MobileTokenService from '../../services/mobile_token_service';

const MainView = () => {
  const dispatch = useDispatch()

  MobileTokenService.onNotificationArrived(function() {
    dispatch(increaseNotification());
  })

  useEffect(() => {
    const initialNavigation = async () => {
      navigationRef.current?.reset({ index: 0, routes: [{ name: await navigationUtil.getInitialRouteName() }] });
      appStatusService.handleAppLaunchingStatus();
    }

    initialNavigation();
  }, []);

  return <View/>
}

export default MainView;
