import React, {useState} from 'react';
import {View, ScrollView, Text, Dimensions, StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import Facility from '../../models/Facility';
import mapStyles from '../../assets/stylesheets/shared/mapStyles';

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
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{position: 'absolute', width: '100%', height: '100%'}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        customMapStyle={mapStyles}
      >
      </MapView>

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