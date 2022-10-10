import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import VideoItemListComponent from './VideoItemListComponent';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const itemList = () => {
  return <VideoItemListComponent/>
}

const renderScene = SceneMap({
  // all: <VideoItemListComponent/>,
  all: itemList,
  male: SecondRoute,
  female: FirstRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'all', title: 'ទាំងអស់' },
    { key: 'male', title: 'ប្រុស' },
    { key: 'female', title: 'ស្រី' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: '100%', flexGrow: 1}}
    />
  );
}