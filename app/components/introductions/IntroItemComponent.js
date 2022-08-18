import React from 'react';
import { View, Text, Image } from 'react-native';

import { getStyleOfDevice } from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/introItemComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/introItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const IntroItemComponent = (props) => {
  return (
    <View style={styles.slide}>
      <Image source={props.image} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.label}>{props.description}</Text>
    </View>
  );
}

export default IntroItemComponent;