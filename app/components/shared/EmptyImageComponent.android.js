import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import color from '../../themes/color';
import {getStyleOfDevice} from '../../utils/responsive_util';

const EmptyImageComponent = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={[styles.iconContainer, props.iconContainerStyle]}>
        <FontAwesome name="image" size={props.iconSize || getStyleOfDevice(24, 20)} color={color.whiteColor} />
        <Text style={[{fontSize: 10, color: color.whiteColor}, props.labelStyle]}>មិនមានរូបភាព</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: color.lightGrayColor,
    borderRadius: 80,
    justifyContent: 'center',
    paddingHorizontal: getStyleOfDevice(10, 20),
    paddingVertical: getStyleOfDevice(18, 10),
  }
});

export default EmptyImageComponent;