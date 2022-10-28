import React from 'react';
import { View } from 'react-native';
import {Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather';

import {getStyleOfDevice, mobileIconSize} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/tabBarItemComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/tabBarItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);
const iconSize = getStyleOfDevice(24, mobileIconSize(24));

const TabBarItemComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Icon name={props.icon} color={props.color} size={iconSize} />
        <Text style={[styles.label, {color: props.color}]}>{props.label}</Text>
      </View>

      { props.focused &&
        <View style={[styles.focusedLine, {backgroundColor: props.color}]} />
      }
    </View>
  )
}

export default TabBarItemComponent;
