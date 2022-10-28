import React from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import NavigationHeaderButtonComponent from '../shared/navigationHeaders/NavigationHeaderButtonComponent';

const ClinicNavigationHeaderRightButtonsComponent = () => {
  return (
    <View style={{flexDirection: 'row', height: '100%'}}>
      <NavigationHeaderButtonComponent
        icon={<FeatherIcon name="search" size={20} color="white"/>}
      />

      <NavigationHeaderButtonComponent
        icon={<FeatherIcon name="map" size={20} color="white"/>}
      />
    </View>
  )
}

export default ClinicNavigationHeaderRightButtonsComponent;