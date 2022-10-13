import React from 'react';
import { View } from 'react-native';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import { getStyleOfDevice } from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/introPressableLabelComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/introPressableLabelComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const IntroPressableLabelComponent = (props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <BoldLabelComponent label={props.label} style={[styles.label, props.labelStyle]} />
    </View>
  )
}

export default IntroPressableLabelComponent;