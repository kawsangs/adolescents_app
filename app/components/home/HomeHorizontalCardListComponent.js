import React from 'react';
import {Text} from 'react-native';

import HorizontalCardComponent from '../shared/HorizontalCardComponent';

const HomeHorizontalCardListComponent = () => {
  const items = [
    { title: "សេវាសុខភាពបន្តពូជ", points: 10, image: require('../../assets/images/intro_1.jpg'), has_audio: true },
    { title: "ការអប់រំពីសុខភាពផ្លូវចិត្ត និងសុខភាពផ្លូវភេទ", points: 7, image: require('../../assets/images/intro_1.jpg'), has_audio: true },
  ]

  return (
    <React.Fragment>
      { items.map((item, index) => {
          return <HorizontalCardComponent key={index} item={item} containerStyle={{marginTop: 32}} />
        })
      }
    </React.Fragment>
  )
}

export default HomeHorizontalCardListComponent;