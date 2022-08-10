import React from 'react';
import { View } from 'react-native';

import PlayAudio from '../PlayAudio';
import CardItemTitleComponent from './CardItemTitleComponent';
import color from '../../../themes/color';

const CardItemInfoComponent = (props) => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <PlayAudio size={28} color={color.primaryColor} />
      <CardItemTitleComponent
        title={props.title}
        subtitle={props.subtitle}
      />
    </View>
  )
}

export default CardItemInfoComponent;