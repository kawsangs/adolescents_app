import React from 'react';
import {View, StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/FontAwesome';

const AnonymousIconComponent = (props) => {
  return (
    <View style={[{position: 'relative'}, props.containerStyle]}>
      <FeatherIcon name='user' color={props.color} size={props.size} />
      <AntIcon name='question' color={props.color} size={props.size - 14} style={styles.subIcon} />
    </View>
  )
}

const styles = StyleSheet.create({
  subIcon: {
    position: 'absolute',
    right: -13,
    top: 2,
    width: 20,
    height: 20,
  }
});

export default AnonymousIconComponent;
