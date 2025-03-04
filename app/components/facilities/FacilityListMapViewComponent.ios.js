import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

import FacilityScrollableListComponent from './FacilityScrollableListComponent';
import MapComponent from '../shared/MapComponent';
import TagScrollBarComponent from '../shared/tagScrollBars/TagScrollBarComponent';
import Facility from '../../models/Facility';
import Tag from '../../models/Tag';
import mapHelper from '../../helpers/map_helper';
import facilityHelper from '../../helpers/facility_helper';
import {screenHorizontalPadding} from '../../constants/component_constant';

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
    (!!flatListRef.scrollToEnd && filteredFacilities.length > 0 && facilities.length > 0) && flatListRef.scrollToIndex({index: 0, animated: true})
    setFacilities(filteredFacilities);

    if (filteredFacilities.length > 0) {
      const mapRegion = mapHelper.getInitLatLng(filteredFacilities, regionOffset);
      if (!!mapRegion)
        setMapRegion(mapHelper.getInitLatLng(filteredFacilities, regionOffset));
    }
  }

  return (
    <View style={{flexGrow: 1}}>
      <TagScrollBarComponent tags={Tag.getAll()} onToggleFilter={updateFacilityList} hasInternet={props.hasInternet} type={'tag'}/>
      <View style={{bottom: 256, position: 'absolute', zIndex: 1, flexGrow: 0, width: '100%'}}>
        <FacilityScrollableListComponent facilities={facilities} hasInternet={props.hasInternet} horizontal={true}
          setFlatListRef={(ref) => setFlatListRef(ref)}
          itemContainerStyle={{width: Dimensions.get('screen').width - 32, marginTop: 0, marginRight: 8}}
          customContentContainerStyle={{paddingBottom: 4, paddingLeft: screenHorizontalPadding, paddingRight: 8}}
          isMapView={true}
        />
      </View>
      <MapComponent initRegion={{latitude: initRegion.latitude, longitude: initRegion.longitude}}
        currentRegion={mapRegion} markers={markers}
      />
    </View>
  )
}

export default FacilityListMapViewComponent;