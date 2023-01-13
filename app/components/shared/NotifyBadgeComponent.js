import React from 'react';
import {View} from 'react-native';

const NotifyBadgeComponent = (props) => {
  return <View style={{position: 'absolute', zIndex: 1, width: 8, height: 8, borderRadius: 4, backgroundColor: props.color || '#fff', right: props.right || 0, top: props.top || 0,}} />
}

export default NotifyBadgeComponent;