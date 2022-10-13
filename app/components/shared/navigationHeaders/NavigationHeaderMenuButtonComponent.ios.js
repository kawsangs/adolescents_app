import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import NavigationHeaderButtonComponent from './NavigationHeaderButtonComponent';
import color from '../../../themes/color';

const NavigationHeaderMenuButtonComponent = (props) => {
  return <NavigationHeaderButtonComponent onPress={() => props.navigation.openDrawer()}
          icon={<IonIcon name="reorder-two-outline" color={color.whiteColor} size={28} />}
        />
}

export default NavigationHeaderMenuButtonComponent;