import React from 'react';
import {Dimensions, ScrollView} from 'react-native';

import FacilityCardItemComponent from '../facilities/FacilityCardItemComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityHorizontalListComponent = (props) => {
  const renderFacilities = () => {
    return props.facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={props.playingUuid}
                updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
                containerStyle={{width: Dimensions.get('screen').width - 32, marginTop: 0, marginRight: 8}}
                accessibilityLabel={`គ្លីនិកទី${index + 1}`}
             />
    });
  }

  return (
    <ScrollView ref={ref => props.setScrollViewRef(ref)}
      contentContainerStyle={{paddingBottom: 4, paddingLeft: screenHorizontalPadding, paddingRight: 8, paddingBottom: getStyleOfDevice(20, 0)}}
      style={{flexGrow: 0, width: '100%'}} horizontal={true}
    >
      { renderFacilities() }
    </ScrollView>
  )
}

export default FacilityHorizontalListComponent;