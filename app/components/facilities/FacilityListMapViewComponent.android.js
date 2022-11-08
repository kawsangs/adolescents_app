import React, {useEffect, useState} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import MapComponent from '../shared/MapComponent';
import Facility from '../../models/Facility';
import mapHelper from '../../helpers/map_helper';

const screenWidth = Dimensions.get('screen').width;

const FacilityListMapViewComponent = (props) => {
  const [facilities, setFacilities] = useState(Facility.getAll());
  const [mapRegion, setMapRegion] = useState({});
  const [markers, setMarkers] = useState([]);
  const regionOffset = 0.0016;
  const firstFacility = facilities.length > 0 ? facilities[0] : null;
  const initRegion = !!firstFacility ? {latitude: firstFacility.latitude - regionOffset, longitude: firstFacility.longitude} : null;

  useEffect(() => {
    setMapRegion({latitude: facilities[0].latitude - regionOffset, longitude: facilities[0].longitude});
    setMarkers(mapHelper.getMarkers(facilities));
  }, []);

  const renderFacilities = () => {
    return facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={props.playingUuid}
                updatePlayingUuid={props.updatePlayingUuid}
                containerStyle={{width: screenWidth - 32, marginTop: 0, marginRight: 8}}
             />
    });
  }

  const updateFacilities = (facilities) => {
    setFacilities(facilities);

    if (facilities.length > 0) {
      setMarkers([]); // Clear the marker in order to prevent the current marker from showing the previous marker's title
      setMapRegion({latitude: facilities[0].latitude - regionOffset, longitude: facilities[0].longitude});
      setTimeout(() => {
        setMarkers(mapHelper.getMarkers(facilities));
      }, 100);
    }
  }

  return (
    <View style={{flexGrow: 1}}>
      <MapComponent initRegion={{latitude: initRegion.latitude, longitude: initRegion.longitude}}
        currentRegion={mapRegion} markers={markers}
      />

      <FacilityServiceScrollBarComponent updateFacilities={(facilities) => updateFacilities(facilities)}
        containerStyle={{paddingHorizontal: 16}}
      />

      <View style={{bottom: 68, position: 'absolute', flexGrow: 0, width: '100%'}}>
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

export default FacilityListMapViewComponent;