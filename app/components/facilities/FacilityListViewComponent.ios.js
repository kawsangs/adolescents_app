import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import Facility from '../../models/Facility';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {scrollViewPaddingBottom} from '../../constants/ios_component_constant';
import facilityHelper from '../../helpers/facility_helper';

const FacilityListMapViewComponent = () => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const [facilities, setFacilities] = useState(Facility.getAll());
  const [selectedServiceUuid, setSelectedServiceUuid] = useState(null);
  const filteredProvince = useSelector(state => state.filterFacilityLocation.value);

  useEffect(() => {
    updateFacilityList(selectedServiceUuid);
  }, [filteredProvince]);

  const renderFacilities = () => {
    return facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                containerStyle={{width: '100%'}}
                accessibilityLabel={`គ្លីនិកទី${index + 1}`}
             />
    });
  }

  const updateFacilityList = (serviceUuid) => {
    setFacilities(facilityHelper.getFacilities(filteredProvince, serviceUuid));
    if (selectedServiceUuid != serviceUuid) setSelectedServiceUuid(serviceUuid);
  }

  return (
    <View style={{flexGrow: 1}}>
      <FacilityServiceScrollBarComponent updateFacilityList={updateFacilityList} containerStyle={{paddingRight: screenHorizontalPadding}}/>
      <ScrollView contentContainerStyle={{paddingBottom: scrollViewPaddingBottom, paddingRight: screenHorizontalPadding}}>
        { renderFacilities() }
      </ScrollView>
    </View>
  )
}

export default FacilityListMapViewComponent;