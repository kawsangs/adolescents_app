import React from 'react';
import {View, Text} from 'react-native';
import color from '../../themes/color';

const NotificationBadgeComponent = (props) => {
  return (
    <View style={{position: 'absolute', zIndex: 1, borderRadius: 40, backgroundColor: color.notificationBadgeColor, right: -8, top: -10, paddingHorizontal: 5, paddingVertical: 4, alignItems: 'center', minWidth: 20}}>
      <Text style={{fontSize: 10, fontWeight: 'bold', color: color.whiteColor}}>{props.notificationCount}</Text>
    </View>
  )
}

export default NotificationBadgeComponent