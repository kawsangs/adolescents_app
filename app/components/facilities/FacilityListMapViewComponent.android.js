import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityHorizontalListComponent from '../shared/FacilityHorizontalListComponent';
import MapComponent from '../shared/MapComponent';
import Facility from '../../models/Facility';
import mapHelper from '../../helpers/map_helper';

const FacilityListMapViewComponent = (props) => {
  const [facilities, setFacilities] = useState(Facility.getAll());
  const [mapRegion, setMapRegion] = useState({});
  const [markers, setMarkers] = useState([]);
  const regionOffset = 0.0016;
  const initLatLng = mapHelper.getInitLatLng(facilities, regionOffset);
  const initRegion = !!initLatLng ? initLatLng : {"latitude": 11.569663313293457 - regionOffset, "longitude": 104.90775299072266};

  useEffect(() => {
    setMapRegion(mapHelper.getInitLatLng(facilities, regionOffset));
    setMarkers(mapHelper.getMarkers(facilities));
  }, []);

  const updateFacilities = (filteredFacilities) => {
    setFacilities(filteredFacilities);

    if (filteredFacilities.length > 0) {
      const mapRegion = mapHelper.getInitLatLng(filteredFacilities, regionOffset);
      if (!!mapRegion)
        setMapRegion(mapHelper.getInitLatLng(filteredFacilities, regionOffset));
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
        <FacilityHorizontalListComponent
          facilities={facilities}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
        />
      </View>
    </View>
  )
}

export default FacilityListMapViewComponent;