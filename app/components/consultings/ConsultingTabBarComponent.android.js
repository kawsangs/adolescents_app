import React, {useState} from 'react';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import ConsultingListComponent from './ConsultingListComponent';
import color from '../../themes/color';
import topTabHelper from '../../helpers/top_tab_helper';
import {largeFontSize} from '../../utils/font_size_util';
import {FontFamily} from '../../themes/font';

const ConsultingTabBarComponent = (props) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(topTabHelper.getConsultingRoutes())
  const [activeCategoryUuid, setActiveCategoryUuid] = useState(null);

  const getTabs = () => {
    const consultingCategories = ['បន្តពូជ', 'ផ្លូវចិត្ត', 'មាតា និងទារក']
    let tabs = {};
    consultingCategories.map(category => {
      tabs[category] = itemList;
    });
    return tabs;
  }

  const itemList = () => {
    return <ConsultingListComponent activeCategoryUuid={activeCategoryUuid} />
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

export default ConsultingTabBarComponent;