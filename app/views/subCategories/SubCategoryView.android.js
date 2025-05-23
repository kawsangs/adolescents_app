import React, {useEffect, useState, useRef} from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';
import { AppState } from 'react-native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import SubCategoryNavigationHeaderComponent from '../../components/subCategories/SubCategoryNavigationHeaderComponent';
import SubCategoryItemsComponent from '../../components/subCategories/SubCategoryItemsComponent';
import Category from '../../models/Category';
import categorySyncService from '../../services/category_sync_service';
import audioPlayerService from '../../services/audio_player_service';
import {setParentCategories} from '../../features/parentCategories/parentCategorySlice';
import {setPlayingAudio} from '../../features/audios/currentPlayingAudioSlice';
import categoryHelper from '../../helpers/category_helper';

const SubCategoryView = ({route}) => {
  const listRef = useRef();
  const [playingUuid, setPlayingUuid] = useState(null);
  const [hasInternet, setHasInternet] = useState(false);
  const [subCategories, setSubCategories] = useState(Category.getSubCategories(route.params.id));
  const category = Category.findById(route.params.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setHasInternet(state.isConnected && state.isInternetReachable)
    });
    const appStateSubscription = AppState.addEventListener('change', (nextAppState) => {
      if (AppState.currentState == 'background') {
        setPlayingUuid(null);
        dispatch(setPlayingAudio('null'));
        audioPlayerService.clearAllAudio();
      }
    });

    return () => {
      !!unsubscribe && unsubscribe();
      !!appStateSubscription && appStateSubscription.remove();
    }
  }, [])

  const onRefresh = () => {
    categorySyncService.syncByParentCategory(route.params.id, () => {
      setTimeout(() => {
        setSubCategories([...Category.getSubCategories(route.params.id)])
      }, 1000);
      dispatch(setParentCategories(categoryHelper.getHomeCategories()))
      listRef.current?.stopRefreshLoading()
    }, () => listRef.current?.stopRefreshLoading());
  }

  return (
    <GradientScrollViewComponent
      ref={listRef}
      header={<SubCategoryNavigationHeaderComponent label={category.name} clearAudio={() => { setPlayingUuid(null); dispatch(setPlayingAudio('null'));}} />}
      body={<SubCategoryItemsComponent items={subCategories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />}
      scrollViewStyle={subCategories.length == 0 ? {paddingHorizontal: 0, paddingBottom: 0} : {}}
      hasInternet={hasInternet}
      allowPullRefresh={true}
      refreshingAction={() => onRefresh()}
    />
  )
}

export default SubCategoryView;