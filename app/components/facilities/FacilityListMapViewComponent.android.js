import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import FacilityTagScrollBarComponent from './FacilityTagScrollBarComponent';
import FacilityHorizontalListComponent from '../shared/FacilityHorizontalListComponent';
import MapComponent from '../shared/MapComponent';
import Facility from '../../models/Facility';
import Tag from '../../models/Tag';
import mapHelper from '../../helpers/map_helper';
import facilityHelper from '../../helpers/facility_helper';

const FacilityListMapViewComponent = (props) => {
  const [facilities, setFacilities] = useState(Facility.getAll());
  const [mapRegion, setMapRegion] = useState({});
  const [markers, setMarkers] = useState([]);
  const [selectedTagUuid, setSelectedTagUuid] = useState(null);
  const regionOffset = 0.0016;
  const initLatLng = mapHelper.getInitLatLng(facilities, regionOffset);
  const initRegion = !!initLatLng ? initLatLng : {"latitude": 11.569663313293457 - regionOffset, "longitude": 104.90775299072266};
  const filteredProvince = useSelector(state => state.filterFacilityLocation.value);
  const [flatListRef, setFlatListRef] = useState(React.createRef());

  useEffect(() => {
    setMapRegion(mapHelper.getInitLatLng(facilities, regionOffset));
    setMarkers(mapHelper.getMarkers(facilities));
  }, []);

  useEffect(() => {
    updateFacilityList(selectedTagUuid);
  }, [filteredProvince]);

  const updateFacilityList = (tagUuid) => {
    const filteredFacilities = facilityHelper.getFacilities(filteredProvince, tagUuid)
    if (selectedTagUuid != tagUuid) setSelectedTagUuid(tagUuid);
    setFacilities(filteredFacilities);
    !!flatListRef.scrollToEnd && flatListRef.scrollToIndex({index: 0, animated: true})

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
      <FacilityTagScrollBarComponent tags={Tag.getAll()} updateFacilityList={(tagUuid) => updateFacilityList(tagUuid)} hasInternet={props.hasInternet}/>
      <View style={{bottom: 68, position: 'absolute', flexGrow: 0, width: '100%'}}>
        <FacilityHorizontalListComponent
          setFlatListRef={(ref) => setFlatListRef(ref)}
          hasInternet={props.hasInternet}
          facilities={facilities}
        />
      </View>
    </View>
  )
}

export default FacilityListMapViewComponent;