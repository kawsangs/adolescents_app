import React, { useEffect } from 'react';
import { View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { navigationRef } from '../../navigators/app_navigator';
import appStatusService from '../../services/app_status_service';
import navigationUtil from '../../utils/navigation_util';

import { useDispatch } from 'react-redux';
import { increaseNotification } from '../../features/notifications/unreadNotificationsSlice'
import { setSdkVersion } from '../../features/sdkVersions/sdkVersionSlice'
import notificationService from '../../services/notification_service';

const MainView = () => {
  const dispatch = useDispatch()
  notificationService.onNotificationArrivedInForeground(() => {
    dispatch(increaseNotification());
  });

  useEffect(() => {
    DeviceInfo.getApiLevel().then((value) => {
      dispatch(setSdkVersion(value));
    })

    const initialNavigation = async () => {
      navigationRef.current?.reset({ index: 0, routes: [{ name: await navigationUtil.getInitialRouteName() }] });
      appStatusService.handleAppLaunchingStatus();
    }

    initialNavigation();
  }, []);

  return <View/>
}

export default MainView;
