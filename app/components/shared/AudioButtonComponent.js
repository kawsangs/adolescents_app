import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../../themes/color';
import { getStyleOfDevice } from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/audioButtonComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/audioButtonComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);
const iconSize = getStyleOfDevice(28, 26);

const AudioButtonComponent = (props) => {
  return (
    <TouchableOpacity style={[styles.btn, props.style]}>
      <Icon name="volume-medium-outline" size={iconSize} color={props.hasAudio ? color.primaryColor : color.mutedColor}
        style={{height: iconSize}}
      />
    </TouchableOpacity>
  )
}

export default AudioButtonComponent;