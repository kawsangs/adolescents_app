import React, {useCallback, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import HomeNavigationHeaderComponent from '../../components/home/HomeNavigationHeaderComponent';
import CardListComponent from '../../components/shared/CardListComponent';
import syncService from '../../services/sync_service';
import audioPlayerService from '../../services/audio_player_service';
import MobileTokenService from '../../services/mobile_token_service';
import categoryHelper from '../../helpers/category_helper';
import {setParentCategories} from '../../features/parentCategories/parentCategorySlice';

const HomeView = (props) => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const categories = useSelector(state => state.parentCategory.value)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setParentCategories(categoryHelper.getHomeCategories()))
    let previousStatus = false;  // we store the previousStatus in order to prevent the syncUsers from calling twice when has internet connection
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (state.isConnected && state.isInternetReachable != previousStatus && state.isInternetReachable) {
        syncService.syncUsersAndDependencies();
        MobileTokenService.handleSyncingToken();
      }

      if (previousStatus != state.isInternetReachable) previousStatus = state.isInternetReachable;
    });

    return () => { unsubscribeNetInfo && unsubscribeNetInfo() }
  }, []);

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
    return <CardListComponent items={categories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />
  }

  return (
    <GradientScrollViewComponent
      header={<HomeNavigationHeaderComponent navigation={props.navigation}/>}
      body={renderBody()}
    />
  )
}

export default HomeView