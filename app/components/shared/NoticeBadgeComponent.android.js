import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../../themes/color';

const NoticeBadgeComponent = (props) => {
  const styles = {
    width: 14, height: 14, borderColor: color.redColor, borderWidth: 2, position: 'absolute', top: 14, right: 8, borderRadius: 16, justifyContent: 'center', alignItems: 'center'
  }

  return (
    <View style={[styles, props.style]}>
      <Icon name='exclamation' size={props.iconSize || 9} color={color.redColor} />
    </View>
  )
}

export default NoticeBadgeComponent