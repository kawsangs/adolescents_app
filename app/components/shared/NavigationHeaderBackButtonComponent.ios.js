import React from 'react';
import {Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

import NavigationHeaderButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderButtonComponent';
import color from '../../themes/color';
import {navigationRef} from '../../navigators/app_navigator';

const NavigationHeaderBackButtonComponent = (props) => {
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);
  const appTheme = useSelector(state => state.appTheme.value);

  return <NavigationHeaderButtonComponent
            onPress={() => !!props.onPress ? props.onPress() : navigationRef.current?.goBack()}
            icon={<AnimatedIcon name="chevron-left" color={props.iconColor || (appTheme.primary_text_color ?? color.whiteColor)} size={30} style={props.iconStyle} />}
            buttonStyle={[{alignItems: 'flex-start', paddingLeft: 4}, props.buttonStyle]}
          />
}

export default NavigationHeaderBackButtonComponent;