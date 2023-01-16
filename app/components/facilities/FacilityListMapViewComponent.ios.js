import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import FacilityTagScrollBarComponent from './FacilityTagScrollBarComponent';
import FacilityHorizontalListComponent from '../shared/FacilityHorizontalListComponent';
import MapComponent from '../shared/MapComponent';
import Facility from '../../models/Facility';
import mapHelper from '../../helpers/map_helper';
import facilityHelper from '../../helpers/facility_helper';

const FacilityListMapViewComponent = (props) => {
  const [facilities, setFacilities] = useState(Facility.getAll());
  const [mapRegion, setMapRegion] = useState({});
  const [markers, setMarkers] = useState([]);
  const [selectedServiceUuid, setSelectedServiceUuid] = useState(null);
  const regionOffset = 0.0016;
  const initLatLng = mapHelper.getInitLatLng(facilities, regionOffset);
  const initRegion = !!initLatLng ? initLatLng : {"latitude": 11.569663313293457 - regionOffset, "longitude": 104.90775299072266};
  const filteredProvince = useSelector(state => state.filterFacilityLocation.value);
  const [scrollViewRef, setScrollViewRef] = useState(React.createRef());

  useEffect(() => {
    setMapRegion(mapHelper.getInitLatLng(facilities, regionOffset));
    setMarkers(mapHelper.getMarkers(facilities));
  }, []);

  useEffect(() => {
    updateFacilityList(selectedServiceUuid);
  }, [filteredProvince]);

  const updateFacilityList = (serviceUuid) => {
    const filteredFacilities = facilityHelper.getFacilities(filteredProvince, serviceUuid)
    if (selectedServiceUuid != serviceUuid) setSelectedServiceUuid(serviceUuid);
    setFacilities(filteredFacilities);
    !!scrollViewRef.scrollTo && scrollViewRef.scrollTo({x: 0, animated: true})

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

      <FacilityTagScrollBarComponent updateFacilityList={(serviceUuid) => updateFacilityList(serviceUuid)}
        containerStyle={{paddingHorizontal: 16}}
      />

      <View style={{bottom: 68, position: 'absolute', flexGrow: 0, width: '100%'}}>
        <FacilityHorizontalListComponent
          setScrollViewRef={(ref) => setScrollViewRef(ref)}
          facilities={facilities}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
        />
      </View>
    </View>
  )
}

export default FacilityListMapViewComponent;