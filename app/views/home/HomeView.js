import React from 'react';
import { View, Text } from 'react-native';

import SquareCardComponent from '../../components/shared/squareCard/SquareCardComponent';

const HomeView = () => {
  const renderCards = () => {
    const data = [
      { title: 'ការយល់ដឹងពីយេនឌ័រ', points: 5, has_audio: true },
      { title: 'គ្លីនិចសុខភាពនិងសេវារំលូត', points: 10, has_audio: true },
      { title: 'សេវាគាំទ្រផ្លូវចិត្តនិងចិត្តសង្គម', points: 2, has_audio: true },
      { title: 'ការកំសាន្ត (វីដេអូអប់រំ)', points: 7, has_audio: false },
    ];

    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.map((item, index) =>
          <SquareCardComponent containerStyle={{marginLeft: 16, marginTop: 40}} key={index} item={item} />
        )}
      </View>
    )
  }

  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <Text>Home screen</Text>

      { renderCards() }
    </View>
  )
}

export default HomeView