import React, {useState} from 'react';
import {View, ScrollView, Text, Dimensions} from 'react-native';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import Facility from '../../models/Facility';

const screenWidth = Dimensions.get('screen').width;

const FacilityMapViewComponent = () => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const [facilities, setFacilities] = useState(Facility.getAll());

  const renderFacilities = () => {
    return facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                containerStyle={{width: screenWidth - 32, marginTop: 0, marginRight: 8}}
             />
    });
  }
  
  return (
    <View style={{flexGrow: 1}}>
      <FacilityServiceScrollBarComponent updateFacilities={(facilities) => setFacilities(facilities)}/>
      <ScrollView
        contentContainerStyle={{paddingBottom: 4}}
        style={{bottom: 0, position: 'absolute'}}
        horizontal={true}
      >
        { renderFacilities() }
      </ScrollView>
    </View>
  )
}

export default FacilityMapViewComponent;