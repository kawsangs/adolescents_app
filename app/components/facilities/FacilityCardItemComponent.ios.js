import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';

import FacilityCardInfoComponent from './FacilityCardInfoComponent';
import FacilityLogoComponent from './FacilityLogoComponent';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import {navigationRef} from '../../navigators/app_navigator';
import visitService from '../../services/visit_service';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityCardItemComponent = (props) => {
  const renderInfo = () => {
    return <FacilityCardInfoComponent uuid={props.facility.uuid} name={props.facility.name} audio={props.facility.audioSource}
              services={props.facility.services}
              accessibilityLabel={props.accessibilityLabel}
           />
  }

  const viewDetail = () => {
    visitService.recordVisitFacility(props.facility, () => {
      const facilityUuid = !!props.facility.uuid ? props.facility.uuid : props.facility.id
      navigationRef.current?.navigate('FacilityDetailView', {uuid: facilityUuid})
    });
  }

  return (
    <Card mode="elevated" elevation={props.isMapView ? 1 : cardElevation} onPress={() => viewDetail()}
      style={[{borderRadius: cardBorderRadius, height: getStyleOfDevice(100, 90), marginTop: 11}, props.containerStyle]}
    >
      <View style={{flexDirection: 'row', flexGrow: 1}}>
        <FacilityLogoComponent facility={props.facility} />
        { renderInfo() }
      </View>
    </Card>
  )
}

export default FacilityCardItemComponent;