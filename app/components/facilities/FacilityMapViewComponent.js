import React, {useEffect, useState} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import CurrentLocationButtonComponent from '../shared/CurrentLocationButtonComponent';
import MapComponent from '../shared/MapComponent';
import Facility from '../../models/Facility';

const screenWidth = Dimensions.get('screen').width;

const FacilityMapViewComponent = () => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const [facilities, setFacilities] = useState(Facility.getAll());
  const [mapRegion, setMapRegion] = useState({});
  const [marker, setMarker] = useState({});

  useEffect(() => {
    setMapRegion({latitude: facilities[0].latitude, longitude: facilities[0].longitude});
    setMarker({latitude: facilities[0].latitude, longitude: facilities[0].longitude, title: facilities[0].name});
  }, []);

  const renderFacilities = () => {
    return facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                containerStyle={{width: screenWidth - 32, marginTop: 0, marginRight: 8}}
             />
    });
  }

  const updateFacilities = (facilities) => {
    setFacilities(facilities);

    if (facilities.length > 0) {
      setMapRegion({latitude: facilities[0].latitude - 0.0016, longitude: facilities[0].longitude});
      setMarker({latitude: facilities[0].latitude, longitude: facilities[0].longitude, title: facilities[0].name});
    }
  }
  
  return (
    <View style={{flexGrow: 1}}>
      <MapComponent region={mapRegion} marker={marker} />

      <FacilityServiceScrollBarComponent updateFacilities={(facilities) => updateFacilities(facilities)}
        containerStyle={{paddingHorizontal: 16}}
      />

      <View style={{bottom: 68, position: 'absolute', flexGrow: 0, width: '100%'}}>
        <CurrentLocationButtonComponent  updatePosition={(positions) => setMapRegion({latitude: positions.latitude, longitude: positions.longitude})}/>
        <ScrollView
          contentContainerStyle={{paddingBottom: 4, paddingLeft: 16, paddingRight: 8}}
          style={{flexGrow: 0, width: '100%'}}
          horizontal={true}
        >
          { renderFacilities() }
        </ScrollView>
      </View>
    </View>
  )
}

export default FacilityMapViewComponent;