import React from 'react';
import { View, Text } from 'react-native';

import HomeHorizontalCardComponent from '../../components/home/HomeHorizontalCardComponent';

const HomeView = () => {
  const renderCards = () => {
    const data = Array.from({length: 3});
    return (
      <View style={{backgroundColor: '#347cb6', flex: 1, paddingTop: 20}}>
        {data.map((_, i) =>
          <HomeHorizontalCardComponent key={i} containerStyle={{marginVertical: 25, marginHorizontal: 16}} />
        )}
      </View>
    );
  }

  return (
    <View class={{flex: 1}}>
      <Text>Home screen</Text>
      { renderCards() }
    </View>
  )
}

export default HomeView