import React, {useCallback, useEffect, useState, useRef} from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'react-native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import HomeNavigationHeaderComponent from '../../components/home/HomeNavigationHeaderComponent';
import CardListComponent from '../../components/shared/CardListComponent';
import HomeAppThemeSectionComponent from '../../components/home/HomeAppThemeSectionComponent';
import FormBottomSheetModalComponent from '../../components/shared/FormBottomSheetModalComponent';

import syncService from '../../services/sync_service';
import audioPlayerService from '../../services/audio_player_service';
import MobileTokenService from '../../services/mobile_token_service';
import themeService from '../../services/theme_service';
import categoryHelper from '../../helpers/category_helper';
import appUpdateHelper from '../../helpers/app_update_helper';
import {setParentCategories} from '../../features/parentCategories/parentCategorySlice';
import { setAppThemes } from '../../features/appThemes/appThemeSlice';
import {setPlayingAudio} from '../../features/audios/currentPlayingAudioSlice';
import Theme from '../../models/Theme';
import {appUpdateSnapPoints} from '../../constants/modal_constant';

const HomeView = (props) => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const categories = useSelector(state => state.parentCategory.value)
  const dispatch = useDispatch();
  const appState = useRef(AppState.currentState);
  let bottomSheetRef = React.createRef();
  let modalRef = React.createRef();

  useEffect(() => {
    dispatch(setParentCategories(categoryHelper.getHomeCategories()))
    let previousStatus = false;  // we store the previousStatus in order to prevent the syncUsers from calling twice when has internet connection
    let subscription;
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (state.isConnected && state.isInternetReachable != previousStatus && state.isInternetReachable) {
        syncService.syncUsersAndDependencies();
        MobileTokenService.handleSyncingToken();
        syncAppTheme();
        subscription = AppState.addEventListener('change', handleAppStateChange);
      }
      else {
        if (Theme.getAll().length > 0)
          dispatch(setAppThemes(Theme.getAll()));
      }

      if (previousStatus != state.isInternetReachable) previousStatus = state.isInternetReachable;
    });
    return () => {
      unsubscribeNetInfo && unsubscribeNetInfo();
      subscription && subscription.remove();
    }
  }, []);

  useEffect(() => {
    appUpdateHelper.checkForUpdate(bottomSheetRef, modalRef);
  }, [bottomSheetRef])

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

  const syncAppTheme = () => {
    themeService.syncData(() => {
      dispatch(setAppThemes(Theme.getAll()));
    });
  }

  const handleAppStateChange = (nextAppState) => {
    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      syncAppTheme();
    }
    if (AppState.currentState == 'background') {
      dispatch(setPlayingAudio(null));
      setPlayingUuid(null);
      setTimeout(() => {
        audioPlayerService.clearAllAudio();
      }, 100);
    }
    appState.current = nextAppState;
  };

  const renderBody = () => {
    return (
      <React.Fragment>
        <CardListComponent items={categories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />
        <HomeAppThemeSectionComponent/>
        <FormBottomSheetModalComponent ref={bottomSheetRef} formModalRef={modalRef} snapPoints={appUpdateSnapPoints} onDismiss={() => bottomSheetRef.current?.setBodyContent(null)} />
      </React.Fragment>
    )
  }

  return (
    <GradientScrollViewComponent
      header={
        <HomeNavigationHeaderComponent navigation={props.navigation}/>
      }
      body={renderBody()}
    />
  )
}

export default HomeView