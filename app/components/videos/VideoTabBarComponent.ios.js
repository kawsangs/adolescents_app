import React, {useEffect, useState} from 'react';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import NetInfo from '@react-native-community/netinfo';

import VideoItemListComponent from './VideoItemListComponent';
import color from '../../themes/color';
import VideoCategory from '../../models/VideoCategory';
import topTabHelper from '../../helpers/top_tab_helper';
import {largeFontSize} from '../../utils/font_size_util';
import {FontFamily} from '../../themes/font';

const VideoTabBarComponent = (props) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(topTabHelper.getVideoCategoryRoutes())
  const [activeCategoryUuid, setActiveCategoryUuid] = useState(null);
  const [hasInternet, setHasInternet] = useState(true);

  useEffect(() => {
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (hasInternet != state.isInternetReachable)
        setHasInternet(state.isInternetReachable);
    });

    return () => { unsubscribeNetInfo && unsubscribeNetInfo() }
  }, []);

  const getTabs = () => {
    let tabs = {all: itemList};
    VideoCategory.getAll().map(category => {
      tabs[category.name] = itemList;
    });

    return tabs;
  }

  const itemList = () => {
    return <VideoItemListComponent categoryUuid={activeCategoryUuid} hasInternet={hasInternet} />
  }

  const renderTabBar = (tabBarProps) => {
    return (
      <TabBar
        {...tabBarProps}
        getLabelText={({ route }) => route.title}
        indicatorStyle={{backgroundColor: color.whiteColor}}
        style={{ backgroundColor: color.primaryColor }}
        activeColor={color.primary}
        inactiveColor={color.whiteColor}
        labelStyle={{ color: color.whiteColor, fontSize: largeFontSize(), fontFamily: FontFamily.bold }}
        onTabPress={({ route, preventDefault }) => setActiveCategoryUuid(route.uuid)}
      />
    )
  }

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap(getTabs())}
      onIndexChange={setIndex}
      initialLayout={{ width: '100%', flexGrow: 1}}
      renderTabBar={renderTabBar}
    />
  );
}

export default VideoTabBarComponent;