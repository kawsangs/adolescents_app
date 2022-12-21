import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilityNavigationHeaderComponent from '../../components/facilities/FacilityNavigationHeaderComponent';
import FacilityListViewComponent from '../../components/facilities/FacilityListViewComponent';
import FacilityListMapViewComponent from '../../components/facilities/FacilityListMapViewComponent';
import {gradientScrollViewBigPaddingBottom} from '../../constants/component_constant';
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
      body={renderBody()}
      scrollViewStyle={isListView ? styles.listView : styles.mapView}
    />
  )
}

const styles = StyleSheet.create({
  listView: {
    paddingRight: 0,
    paddingBottom: gradientScrollViewBigPaddingBottom
  },
  mapView: {
    paddingHorizontal: 0,
    paddingBottom: 0
  }
});

export default FacilityView;