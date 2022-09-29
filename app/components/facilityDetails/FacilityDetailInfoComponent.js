import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import FacilityDetailTitleComponent from './FacilityDetailTitleComponent';
import FacilityDetailViewRouteButtonComponent from './FacilityDetailViewRouteButtonComponent';
import FacilityDetailWorkingDayAndContactComponent from './FacilityDetailWorkingDayAndContactComponent';
import FacilityDetailServiceTagsComponent from './FacilityDetailServiceTagsComponent';
import FacilityDetailContactPlatformsComponent from './FacilityDetailContactPlatformsComponent';
import {screenHorizontalPadding, descriptionLineHeight} from '../../constants/component_constant';
import {largeFontSize} from '../../utils/font_size_util';
import Facility from '../../models/Facility';

const FacilityDetailInfoComponent = (props) => {
  const facility = Facility.findByUuid(props.uuid);

  return (
    <View style={{paddingHorizontal: screenHorizontalPadding, paddingTop: 16}}>
      <FacilityDetailTitleComponent name={facility.name} address={facility.address}/>
      <FacilityDetailViewRouteButtonComponent/>
      <FacilityDetailWorkingDayAndContactComponent workingDays={facility.working_days} contactNumbers={facility.tels}/>
      <FacilityDetailServiceTagsComponent serviceUuids={facility.service_uuids}/>
      <FacilityDetailContactPlatformsComponent
        websites={facility.websites}
        facebookPages={facility.facebook_pages}
        telegram={facility.telegram_username}
      />
      <Text style={{fontSize: largeFontSize(), marginTop: 16, lineHeight: descriptionLineHeight}}>
        {facility.description}
      </Text>
    </View>
  )
}

export default FacilityDetailInfoComponent;