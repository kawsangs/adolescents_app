import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilityNavigationHeaderComponent from '../../components/facilities/FacilityNavigationHeaderComponent';
import FacilitySearchHeaderComponent from '../../components/facilities/FacilitySearchHeaderComponent';
import FacilityListViewComponent from '../../components/facilities/FacilityListViewComponent';
import FacilityListMapViewComponent from '../../components/facilities/FacilityListMapViewComponent';
import FacilitySearchListComponent from '../../components/facilities/FacilitySearchListComponent';
import {scrollViewPaddingBottom} from '../../constants/component_constant';
import audioPlayerService from '../../services/audio_player_service';

const FacilityView = (props) => {
  const [isListView, setIsListView] = useState(true);
  const [playingUuid, setPlayingUuid] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

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

  const renderHeader = () => {
    if (isSearching)
      return <FacilitySearchHeaderComponent updateIsSearching={(status) => setIsSearching(status)} />

    return <FacilityNavigationHeaderComponent navigation={props.navigation} isListView={isListView} isSearching={isSearching}
            updateIsListView={(status) => setIsListView(status)}
            updateIsSearching={(status) => setIsSearching(status)}
           />
  }

  const renderBody = () => {
    if (isSearching) return <FacilitySearchListComponent/>

    return isListView ? <FacilityListViewComponent playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />
           : <FacilityListMapViewComponent playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />;
  }

  return (
    <GradientScrollViewComponent
      header={renderHeader()}
      body={renderBody()}
      scrollViewStyle={isListView ? styles.listView : styles.mapView}
    />
  )
}

const styles = StyleSheet.create({
  listView: {
    paddingRight: 0,
    paddingBottom: scrollViewPaddingBottom - 8
  },
  mapView: {
    paddingHorizontal: 0,
    paddingBottom: 0
  }
});

export default FacilityView;