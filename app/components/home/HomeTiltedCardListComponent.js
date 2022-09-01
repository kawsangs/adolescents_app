import React from 'react';
import {Text, View} from 'react-native';

import TiltedCardComponent from '../shared/TiltedCardComponent';

const HomeTiltedCardListComponent = () => {
  const items = [
    { title: "ការយល់ដឹងពីយេនឌ័រ", points: 10, image: require('../../assets/images/intro_1.jpg'), audio: require('../../assets/audios/safety_plan.mp3') },
    { title: "គ្លីនិចសុខភាពនិងសេវារំលូត", points: 7, image: require('../../assets/images/intro_1.jpg'), audio: require('../../assets/audios/safety_plan.mp3') },
    { title: "សេវាគាំទ្រផ្លូវចិត្តនិងចិត្តសង្គម", points: 7, image: require('../../assets/images/intro_1.jpg'), audio: null },
    { title: "ការកំសាន្ត (វីដេអូអប់រំ)", points: 7, image: require('../../assets/images/intro_1.jpg'), audio: null },
  ]

  return (
    <View style={{marginTop: 32, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      { items.map((item, index) => {
          return <TiltedCardComponent key={index} item={item} containerStyle={{marginTop: 28, marginBottom: 16}} />
        })
      }
    </View>
  )
}

export default HomeTiltedCardListComponent;