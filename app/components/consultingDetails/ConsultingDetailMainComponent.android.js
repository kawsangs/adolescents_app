import React from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';

import ConsultingDetailDescriptionComponent from './ConsultingDetailDescriptionComponent';
import FacilityCardItemComponent from '../facilities/FacilityCardItemComponent';
import Facility from '../../models/Facility';
import {screenHorizontalPadding} from '../../constants/component_constant';

const ConsultingDetailMainComponent = () => {
  const [facilities, setFacilities] = React.useState(Facility.getAll());
  const [playingUuid, setPlayingUuid] = React.useState(null);

  const renderFacilities = () => {
    return facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                containerStyle={{width: Dimensions.get('screen').width - 32, marginTop: 0, marginRight: 8}}
             />
    });
  }

  return (
    <React.Fragment>
      <View style={{paddingTop: 16, paddingHorizontal: screenHorizontalPadding}}>
        <ConsultingDetailDescriptionComponent/>

        <Text style={{marginTop: 20, marginBottom: 8, color: 'white', fontSize: 16}}>ណែនាំកន្លែងផ្តល់សេវា</Text>
      </View>
      <ScrollView
        contentContainerStyle={{paddingBottom: 4, paddingLeft: screenHorizontalPadding, paddingRight: 8}}
        style={{flexGrow: 0, width: '100%'}}
        horizontal={true}
      >
        { renderFacilities() }
      </ScrollView>
    </React.Fragment>
  )
}

export default ConsultingDetailMainComponent;