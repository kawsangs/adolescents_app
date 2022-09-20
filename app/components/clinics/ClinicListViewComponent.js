import React from 'react';
import {View} from 'react-native';

import ClinicServiceScrollBarComponent from './ClinicServiceScrollBarComponent';
import ClinicCardItemComponent from './ClinicCardItemComponent';
import {screenPaddingHorizontal} from '../../constants/component_constant';

const ClinicListViewComponent = () => {
  return (
    <View style={{flexGrow: 1}}>
      <ClinicServiceScrollBarComponent/>
      <View style={{flexGrow: 1, paddingRight: screenPaddingHorizontal}}>
        <ClinicCardItemComponent/>
      </View>
    </View>
  )
}

export default ClinicListViewComponent;