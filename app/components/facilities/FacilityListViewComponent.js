import React, {useState} from 'react';
import {View} from 'react-native';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import Facility from '../../models/Facility';

const FacilityListViewComponent = () => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const [facilities, setFacilities] = useState(Facility.getAll());

  const renderFacilities = () => {
    return facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
             />
    });
  }

  return (
    <View style={{flexGrow: 1}}>
      <FacilityServiceScrollBarComponent updateFacilities={(facilities) => setFacilities(facilities)}/>
      <View style={{flexGrow: 1, paddingRight: screenHorizontalPadding}}>
        { renderFacilities() }
      </View>
    </View>
  )
}

export default FacilityListViewComponent;