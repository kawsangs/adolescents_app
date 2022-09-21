import React, {useState} from 'react';
import {View, ScrollView, Text, Dimensions, StyleSheet} from 'react-native';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import MapComponent from '../shared/MapComponent';
import Facility from '../../models/Facility';

const screenWidth = Dimensions.get('screen').width;

const FacilityMapViewComponent = () => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const [facilities, setFacilities] = useState(Facility.getAll());
  const [marker, setMarker] = useState({latitude: facilities[0].latitude, longitude: facilities[0].longitude});

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
      <MapComponent marker={marker} title={facilities[0].name}/>

      <FacilityServiceScrollBarComponent updateFacilities={(facilities) => setFacilities(facilities)}
        containerStyle={{paddingHorizontal: 16}}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: 4, paddingLeft: 16, paddingRight: 8}}
        style={{bottom: 68, position: 'absolute', flexGrow: 0, width: '100%'}}
        horizontal={true}
      >
        { renderFacilities() }
      </ScrollView>
    </View>
  )
}

export default FacilityMapViewComponent;