import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TabBarItemComponent = (props) => {
  return (
    <View style={{flex: 1, width: 50}}>
      <View style={{flex: 1, alignItems: 'center', paddingBottom: 12, paddingTop: 8}}>
        <Icon name={props.icon} color={props.color} size={24} />
        <Text style={{fontSize: 12, color: props.color}}>{props.label}</Text>
      </View>

      { props.focused &&
        <View style={{height: 2.1, borderRadius: 6, backgroundColor: props.color, alignSelf: 'stretch', marginBottom: 0.6}} />
      }
    </View>
  )
}

export default TabBarItemComponent;