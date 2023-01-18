import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import FacilityDetailTitleComponent from './FacilityDetailTitleComponent';
import FacilityDetailWorkingDayAndContactComponent from './FacilityDetailWorkingDayAndContactComponent';
import FacilityDetailServiceTagsComponent from './FacilityDetailServiceTagsComponent';
import FacilityDetailContactPlatformsComponent from './FacilityDetailContactPlatformsComponent';
import FacilityViewRouteButtonComponent from '../shared/FacilityViewRouteButtonComponent';
import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import {screenHorizontalPadding, descriptionLineHeight} from '../../constants/component_constant';
import {contactSnapPoints} from '../../constants/modal_constant';
import {descriptionFontSize} from '../../utils/font_size_util';
import Facility from '../../models/Facility';

const GrayView = (props) => {
  return <View style={{backgroundColor: "#f5f5f5", paddingHorizontal: screenHorizontalPadding, paddingVertical: 16}}>{props.children}</View>
}

const FacilityDetailInfoComponent = (props) => {
  const facility = Facility.findByUuid(props.uuid);
  let bottomSheetRef = React.createRef();
  let modalRef = React.createRef();

  return (
    <View>
      <GrayView>
        <FacilityDetailTitleComponent name={facility.name} addresses={facility.addresses}/>
        <FacilityViewRouteButtonComponent latitude={facility.latitude} longitude={facility.longitude} />
      </GrayView>

      <FacilityDetailWorkingDayAndContactComponent workingDays={facility.working_days} contactNumbers={facility.tels}/>
      <GrayView>
        <FacilityDetailServiceTagsComponent services={facility.services} bottomSheetRef={bottomSheetRef} modalRef={modalRef}/>
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

export default FacilityDetailInfoComponent;