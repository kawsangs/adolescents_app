import React from 'react';
import {View} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import FacilityLogoComponent from '../facilities/FacilityLogoComponent';
import Facility from '../../models/Facility';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityDetailGalleryComponent = (props) => {
  const logoSize = getStyleOfDevice(160, 140)
  return (
    <View style={{height: getStyleOfDevice(200, DeviceInfo.hasDynamicIsland() ? 220 : 180), justifyContent: 'center', alignItems: 'center'}}>
      <FacilityLogoComponent facility={Facility.findByUuid(props.uuid)} customImageStyle={{width: logoSize, height: logoSize}}
        emptyIconContainerStyle={!DeviceInfo.isTablet() ? {height: '50%'} : {}}
      />
    </View>
  )
}

export default FacilityDetailGalleryComponent;