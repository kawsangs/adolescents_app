import React, {useCallback, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilityNavigationHeaderComponent from '../../components/facilities/FacilityNavigationHeaderComponent';
import FacilityListViewComponent from '../../components/facilities/FacilityListViewComponent';
import FacilityListMapViewComponent from '../../components/facilities/FacilityListMapViewComponent';
import audioPlayerService from '../../services/audio_player_service';

const FacilityView = (props) => {
  const [isListView, setIsListView] = useState(true);
  const [playingUuid, setPlayingUuid] = useState(null);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setPlayingUuid(null);
        setTimeout(() => {
          audioPlayerService.clearAllAudio();
        }, 100);
      }
    }, [])
  );

  const renderBody = () => {
    return isListView ? <FacilityListViewComponent playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />
           : <FacilityListMapViewComponent playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />;
  }

  return (
    <GradientScrollViewComponent
      header={<FacilityNavigationHeaderComponent navigation={props.navigation} isListView={isListView} updateIsListView={(status) => setIsListView(status)} />}
      isNotScrollView={true}
      body={renderBody()}
    />
  )
}

export default FacilityView;