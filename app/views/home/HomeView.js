import React from 'react';
import { View, Text } from 'react-native';

import HomeHorizontalCardComponent from '../../components/home/HomeHorizontalCardComponent';

const HomeView = () => {
  const renderCards = () => {
    const data = [
      { title: 'សេវាសុខភាពបន្តពូជ', points: 10, image: require('../../assets/images/intro_1.jpg') },
      { title: 'ការអប់រំពីសុខភាពផ្លូវចិត្ត និងសុខភាពផ្លូវភេទ', points: 7, image: require('../../assets/images/intro_2.jpg' )},
      { title: 'ការយល់ដឹងពីយេនឌ័រ', points: 5, image: require('../../assets/images/intro_3.jpg') }
    ];

    return (
      <View style={{backgroundColor: '#347cb6', flex: 1, paddingTop: 20}}>
        {data.map((item, i) =>
          <HomeHorizontalCardComponent key={i} containerStyle={{marginVertical: 25, marginHorizontal: 16}} item={item} />
        )}
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      {/* <Text>Home screen</Text> */}
      { renderCards() }
    </View>
  )
}

export default HomeView