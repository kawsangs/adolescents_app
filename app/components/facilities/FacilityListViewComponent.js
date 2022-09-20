import React, {useState} from 'react';
import {View} from 'react-native';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import {screenPaddingHorizontal} from '../../constants/component_constant';
import facilities from '../../db/json/facilities';

const FacilityListViewComponent = () => {
  const [playingUuid, setPlayingUuid] = useState(null);

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
      <FacilityServiceScrollBarComponent/>
      <View style={{flexGrow: 1, paddingRight: screenPaddingHorizontal}}>
        { renderFacilities() }
      </View>
    </View>
  )
}

export default FacilityListViewComponent;