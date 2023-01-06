import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import Facility from '../../models/Facility';
import {screenHorizontalPadding} from '../../constants/component_constant';

const FacilityListViewComponent = () => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const [facilities, setFacilities] = useState(Facility.getAll());
  const filteredProvince = useSelector(state => state.filterFacilityLocation.value);
  let prevFilter = '';

  useEffect(() => {
    if (filteredProvince != prevFilter)
      console.log('===== start filter =====')

    prevFilter = filteredProvince;
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

  return (
    <View style={{flexGrow: 1}}>
      <FacilityServiceScrollBarComponent updateFacilities={(facilities) => setFacilities(facilities)} containerStyle={{paddingRight: screenHorizontalPadding}}/>
      <ScrollView contentContainerStyle={{paddingBottom: 4, paddingRight: screenHorizontalPadding}}>
        { renderFacilities() }
      </ScrollView>
    </View>
  )
}

export default FacilityListViewComponent;