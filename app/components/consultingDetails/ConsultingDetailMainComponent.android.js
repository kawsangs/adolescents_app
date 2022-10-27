import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import ConsultingDetailDescriptionComponent from './ConsultingDetailDescriptionComponent';
import FacilityHorizontalListComponent from '../shared/FacilityHorizontalListComponent';

import Facility from '../../models/Facility';
import {screenHorizontalPadding} from '../../constants/component_constant';

const ConsultingDetailMainComponent = () => {
  const {t} = useTranslation();
  const [facilities, setFacilities] = React.useState(Facility.getAll());
  const [playingUuid, setPlayingUuid] = React.useState(null);

  return (
    <React.Fragment>
      <View style={{paddingTop: 16, paddingHorizontal: screenHorizontalPadding}}>
        <ConsultingDetailDescriptionComponent/>
        <Text style={{marginTop: 20, marginBottom: 8, color: 'white', fontSize: 16}}>{t('recommendedServiceProvider')}</Text>
      </View>
      <FacilityHorizontalListComponent
        facilities={facilities}
        playingUuid={playingUuid}
        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
      />
    </React.Fragment>
  )
}

export default ConsultingDetailMainComponent;