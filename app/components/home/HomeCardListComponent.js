import React from 'react';
import {View} from 'react-native';

import TiltedCardComponent from '../shared/TiltedCardComponent';
import Category from '../../models/Category';

const HomeCardListComponent = () => {
  const categories = Category.getParentCategories();

  return (
    <View style={{marginTop: 32, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      { categories.map((category, index) => {
          return <TiltedCardComponent key={index}
                    item={category}
                    containerStyle={{marginTop: 28, marginBottom: 16}}
                    playingUuid={props.playingUuid}
                    updatePlayingUuid={props.updatePlayingUuid}
                 />
        })
      }
    </View>
  )
}

export default HomeCardListComponent;