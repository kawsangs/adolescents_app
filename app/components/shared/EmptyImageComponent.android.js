import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import color from '../../themes/color';

const EmptyImageComponent = (props) => {
  return (
    <View style={[{width: '100%', height: '100%', backgroundColor: color.lightGrayColor, justifyContent: 'center', alignItems: 'center'}, props.style]}>
      <FontAwesome name="image" size={props.iconSize || 22} color={color.grayColor} />
    </View>
  )
}

export default EmptyImageComponent;