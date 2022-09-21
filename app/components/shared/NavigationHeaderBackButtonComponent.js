import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import NavigationHeaderButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderButtonComponent';
import color from '../../themes/color';
import {navigationRef} from '../../navigators/app_navigator';

const NavigationHeaderBackButtonComponent = () => {
  return <NavigationHeaderButtonComponent
            onPress={() => navigationRef.current?.goBack()}
            icon={<Icon name="chevron-left" color={color.whiteColor} size={30} />}
          />
}

export default NavigationHeaderBackButtonComponent;