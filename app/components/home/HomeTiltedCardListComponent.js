import React from 'react';
import {View} from 'react-native';

import TiltedCardComponent from '../shared/TiltedCardComponent';
import Category from '../../models/Category';
import {TILTED_CARD} from '../../constants/card_constant';

const HomeTiltedCardListComponent = (props) => {
  const categories = Category.findByDisplayType(TILTED_CARD);

  return (
    <View style={{marginTop: 32, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      { categories.map((item, index) => {
          return <TiltedCardComponent key={index}
                    item={item}
                    containerStyle={{marginTop: 28, marginBottom: 16}}
                    playingUuid={props.playingUuid}
                    updatePlayingUuid={props.updatePlayingUuid}
                 />
        })
      }
    </View>
  )
}

export default HomeTiltedCardListComponent;