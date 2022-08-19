import React from 'react';
import { View, Text } from 'react-native';

import HomeHorizontalCardComponent from '../../components/home/HomeHorizontalCardComponent';

const HomeView = () => {
  const renderCards = () => {
    const data = Array.from({length: 3});
    return (
      <View>
        {data.map((_, i) =>
          <HomeHorizontalCardComponent key={i} containerStyle={{marginVertical: 10, marginHorizontal: 16}} />
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