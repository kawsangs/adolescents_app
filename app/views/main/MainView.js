import React, { useEffect } from 'react';
import { View } from 'react-native';

import { navigationRef } from '../../navigators/app_navigator';
import appStatusService from '../../services/app_status_service';
import navigatorUtil from '../../utils/navigator_util';

const MainView = () => {
  useEffect(() => {
    const initialNavigation = async () => {
      navigationRef.current?.reset({ index: 0, routes: [{ name: 'IntroductionView' }] });
      // navigationRef.current?.reset({ index: 0, routes: [{ name: await navigatorUtil.getInitialRouteName() }] });
      appStatusService.handleAppLaunchingStatus();
    }

    initialNavigation();
  });

  return <View/>
}

export default MainView;