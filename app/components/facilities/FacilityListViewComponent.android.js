import React, {useState} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import Facility from '../../models/Facility';
import {screenHorizontalPadding} from '../../constants/component_constant';

const screenWidth = Dimensions.get('screen').width;

const FacilityListMapViewComponent = () => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const [facilities, setFacilities] = useState(Facility.getAll());

  const renderFacilities = () => {
    return facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                containerStyle={{width: screenWidth - 32}}
             />
    });
  }

  return (
    <View style={{flexGrow: 1}}>
      <FacilityServiceScrollBarComponent updateFacilities={(facilities) => setFacilities(facilities)}
        containerStyle={{paddingRight: screenHorizontalPadding}}
      />
      <ScrollView contentContainerStyle={{paddingBottom: 4, paddingRight: 8}}>
        { renderFacilities() }
      </ScrollView>
    </View>
  )
}

export default FacilityListMapViewComponent;