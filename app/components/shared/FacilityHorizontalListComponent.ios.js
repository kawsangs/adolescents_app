import React from 'react';
import {Dimensions, ScrollView} from 'react-native';

import FacilityCardItemComponent from '../facilities/FacilityCardItemComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';

const FacilityHorizontalListComponent = (props) => {
  const renderFacilities = () => {
    return props.facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={props.playingUuid}
                updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
                containerStyle={{width: Dimensions.get('screen').width - 32, marginTop: 0, marginRight: 8}}
             />
    });
  }

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 4, paddingLeft: screenHorizontalPadding, paddingRight: 8}}
      style={{flexGrow: 0, width: '100%'}} horizontal={true}
    >
      { renderFacilities() }
    </ScrollView>
  )
}

export default FacilityHorizontalListComponent;