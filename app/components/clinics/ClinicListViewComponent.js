import React, {useState} from 'react';
import {View} from 'react-native';

import ClinicServiceScrollBarComponent from './ClinicServiceScrollBarComponent';
import ClinicCardItemComponent from './ClinicCardItemComponent';
import {screenPaddingHorizontal} from '../../constants/component_constant';
import clinics from '../../db/json/clinics';

const ClinicListViewComponent = () => {
  const [playingUuid, setPlayingUuid] = useState(null);

  const renderClinics = () => {
    return clinics.map((clinic, index) => {
      return <ClinicCardItemComponent key={index} clinic={clinic}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
             />
    });
  }

  return (
    <View style={{flexGrow: 1}}>
      <ClinicServiceScrollBarComponent/>
      <View style={{flexGrow: 1, paddingRight: screenPaddingHorizontal}}>
        { renderClinics() }
      </View>
    </View>
  )
}

export default ClinicListViewComponent;