import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import Facility from '../../models/Facility';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {scrollViewPaddingBottom} from '../../constants/ios_component_constant';

const FacilityListMapViewComponent = () => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const [facilities, setFacilities] = useState(Facility.getAll());

  const renderFacilities = () => {
    return facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                containerStyle={{width: '100%'}}
                accessibilityLabel={`គ្លីនិកទី${index + 1}`}
             />
    });
  }

  return (
    <View style={{flexGrow: 1}}>
      <FacilityServiceScrollBarComponent updateFacilities={(facilities) => setFacilities(facilities)} containerStyle={{paddingRight: screenHorizontalPadding}}/>
      <ScrollView contentContainerStyle={{paddingBottom: scrollViewPaddingBottom, paddingRight: screenHorizontalPadding}}>
        { renderFacilities() }
      </ScrollView>
    </View>
  )
}

export default FacilityListMapViewComponent;