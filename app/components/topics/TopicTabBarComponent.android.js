import React, {useState} from 'react';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import TopicListComponent from '../shared/TopicListComponent';
import color from '../../themes/color';
import topTabHelper from '../../helpers/top_tab_helper';
import {largeFontSize} from '../../utils/font_size_util';
import {FontFamily} from '../../themes/font';
import {navigationRef} from '../../navigators/app_navigator';

const TopicTabBarComponent = (props) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(topTabHelper.getTopicRoutes())
  const [activeCategoryUuid, setActiveCategoryUuid] = useState(null);

  const getTabs = () => {
    let tabs = {};
    topTabHelper.getTopicTabKeys().map(topic => {
      tabs[topic] = itemList;
    });
    return tabs;
  }

  const itemList = () => {
    return <TopicListComponent activeCategoryUuid={activeCategoryUuid} onPress={(name) => navigationRef.current?.navigate('QuestionView', {name: name}) } />
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

export default TopicTabBarComponent;