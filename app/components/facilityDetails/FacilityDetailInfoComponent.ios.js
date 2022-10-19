import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import FacilityDetailTitleComponent from './FacilityDetailTitleComponent';
import FacilityDetailWorkingDayAndContactComponent from './FacilityDetailWorkingDayAndContactComponent';
import FacilityDetailServiceTagsComponent from './FacilityDetailServiceTagsComponent';
import FacilityDetailContactPlatformsComponent from './FacilityDetailContactPlatformsComponent';
import FacilityViewRouteButtonComponent from '../shared/FacilityViewRouteButtonComponent';
import color from '../../themes/color';
import {screenHorizontalPadding, descriptionLineHeight} from '../../constants/component_constant';
import {xLargeFontSize, descriptionFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';
import Facility from '../../models/Facility';

const FacilityDetailInfoComponent = (props) => {
  const facility = Facility.findByUuid(props.uuid);
  const viewRouteStyle = () => {
    if (!facility.latitude || !facility.longitude)
      return { btn: {backgroundColor: color.disabledColor}, text: {color: color.mutedColor} }

    return { btn: {backgroundColor: color.primaryColor}, text: {color: color.whiteColor} }
  }

  return (
    <View style={{paddingHorizontal: screenHorizontalPadding, paddingTop: 16}}>
      <FacilityDetailTitleComponent name={facility.name} address={facility.address}/>
      <FacilityViewRouteButtonComponent uuid={props.uuid} iconSize={20} iconColor={viewRouteStyle().text.color}
        latitude={facility.latitude} longitude={facility.longitude}
        buttonStyle={[styles.viewRouteBtn, viewRouteStyle().btn]} labelStyle={[styles.viewRouteLabel, viewRouteStyle().text]}
      />

      <FacilityDetailWorkingDayAndContactComponent workingDays={facility.working_days} contactNumbers={facility.tels}/>
      <FacilityDetailServiceTagsComponent serviceUuids={facility.service_uuids}/>
      <FacilityDetailContactPlatformsComponent
        websites={facility.websites}
        facebookPages={facility.facebook_pages}
        telegram={facility.telegram_username}
      />
      <Text style={{fontSize: descriptionFontSize(), marginTop: 16, lineHeight: descriptionLineHeight}}>
        {facility.description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewRouteBtn: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    height: componentUtil.mediumPressableItemSize(),
    width: 200,
  },
  viewRouteLabel: {
    fontSize: xLargeFontSize(),
    marginLeft: 8,
  }
});

export default FacilityDetailInfoComponent;
