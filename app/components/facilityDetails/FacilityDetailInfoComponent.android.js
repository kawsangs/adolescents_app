import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import FacilityDetailTitleComponent from './FacilityDetailTitleComponent';
import FacilityDetailWorkingDayAndContactComponent from './FacilityDetailWorkingDayAndContactComponent';
import FacilityDetailServiceTagsComponent from './FacilityDetailServiceTagsComponent';
import FacilityDetailContactPlatformsComponent from './FacilityDetailContactPlatformsComponent';
import FacilityViewRouteButtonComponent from '../shared/FacilityViewRouteButtonComponent';
import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import color from '../../themes/color';
import {screenHorizontalPadding, descriptionLineHeight} from '../../constants/component_constant';
import {contactSnapPoints} from '../../constants/modal_constant';
import {largeFontSize, descriptionFontSize} from '../../utils/font_size_util';
import {isLowPixelDensityDevice} from '../../utils/responsive_util';
import Facility from '../../models/Facility';

const GrayView = (props) => {
  return <View style={{backgroundColor: "#f5f5f5", paddingHorizontal: screenHorizontalPadding, paddingVertical: 16}}>{props.children}</View>
}

const FacilityDetailInfoComponent = (props) => {
  const facility = Facility.findByUuid(props.uuid);
  let bottomSheetRef = React.createRef();
  let modalRef = React.createRef();

  const viewRouteStyle = () => {
    if (!facility.latitude || !facility.longitude)
      return { btn: {backgroundColor: color.disabledColor}, text: {color: color.mutedColor} }

    return { btn: {backgroundColor: color.primaryColor}, text: {color: color.whiteColor} }
  }

  return (
    <View>
      <GrayView>
        <FacilityDetailTitleComponent name={facility.name} addresses={facility.addresses}/>
        <FacilityViewRouteButtonComponent uuid={props.uuid} iconSize={20} iconColor={viewRouteStyle().text.color}
          latitude={facility.latitude} longitude={facility.longitude}
          buttonStyle={[styles.viewRouteBtn, viewRouteStyle().btn]} labelStyle={[styles.viewRouteLabel, viewRouteStyle().text]}
        />
      </GrayView>

      <FacilityDetailWorkingDayAndContactComponent workingDays={facility.working_days} contactNumbers={facility.tels}/>
      <GrayView>
        <FacilityDetailServiceTagsComponent serviceUuids={facility.service_uuids} bottomSheetRef={bottomSheetRef} modalRef={modalRef}/>
        <FacilityDetailContactPlatformsComponent
          contactNumbers={facility.tels}
          websites={facility.websites}
          facebookPages={facility.facebook_pages}
          telegram={facility.telegram_username}
          bottomSheetRef={bottomSheetRef}
          modalRef={modalRef}
        />
        { !!facility.description &&
          <Text style={{fontSize: descriptionFontSize(), marginTop: 21, lineHeight: descriptionLineHeight}}>
            {facility.description}
          </Text>
        }
      </GrayView>

      <FormBottomSheetModalComponent ref={bottomSheetRef} formModalRef={modalRef} snapPoints={contactSnapPoints} onDismiss={() => bottomSheetRef.current?.setBodyContent(null)} />
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
    height: 48,
    width: isLowPixelDensityDevice() ? 160 : 200,
  },
  viewRouteLabel: {
    fontSize: largeFontSize(),
    marginLeft: 8,
  }
});

export default FacilityDetailInfoComponent;