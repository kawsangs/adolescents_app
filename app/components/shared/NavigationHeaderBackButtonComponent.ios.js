import React from 'react';
import {Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import NavigationHeaderButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderButtonComponent';
import color from '../../themes/color';
import {navigationRef} from '../../navigators/app_navigator';

const NavigationHeaderBackButtonComponent = (props) => {
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);

  return <NavigationHeaderButtonComponent
            onPress={() => !!props.onPress ? props.onPress() : navigationRef.current?.goBack()}
            icon={<AnimatedIcon name="chevron-left" color={props.iconColor || color.whiteColor} size={30} style={props.iconStyle} />}
            buttonStyle={[{alignItems: 'flex-start', paddingLeft: 4}, props.buttonStyle]}
          />
}

export default NavigationHeaderBackButtonComponent;