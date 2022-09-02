import React from 'react';
import {TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import GradientViewComponent from '../shared/GradientViewComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/loginSelectionButtonComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/loginSelectionButtonComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const LoginSelectionButtonComponent = (props) => {
  return (
    <TouchableOpacity
      onPress={() => !!props.onPress && props.onPress()}
      style={[styles.container, props.btnStyle]}
    >
      <GradientViewComponent style={styles.leftIconContainer}>
        <FeatherIcon name={props.iconName} color={color.whiteColor} style={styles.leftIcon} />
      </GradientViewComponent>

      <BoldLabelComponent label={props.label} style={styles.label} />

      <TouchableOpacity style={styles.rightBtn}>
        <IonIcon name="volume-high-outline" color={color.primaryColor} size={24} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default LoginSelectionButtonComponent;