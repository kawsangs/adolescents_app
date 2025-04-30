import React, {useCallback, useEffect, useState, useRef} from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'react-native';
import VersionCheck from 'react-native-version-check';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import HomeNavigationHeaderComponent from '../../components/home/HomeNavigationHeaderComponent';
import CardListComponent from '../../components/shared/CardListComponent';
import HomeAppThemeSectionComponent from '../../components/home/HomeAppThemeSectionComponent';
import FormBottomSheetModalComponent from '../../components/shared/FormBottomSheetModalComponent';
import AppUpdateBottomSheetComponent from '../../components/appUpdateBottomSheets/AppUpdateBottomSheetComponent';

import syncService from '../../services/sync_service';
import audioPlayerService from '../../services/audio_player_service';
import MobileTokenService from '../../services/mobile_token_service';
import themeService from '../../services/theme_service';
import asyncStorageService from '../../services/async_storage_service';
import categoryHelper from '../../helpers/category_helper';
import {setParentCategories} from '../../features/parentCategories/parentCategorySlice';
import { setAppThemes } from '../../features/appThemes/appThemeSlice';
import Theme from '../../models/Theme';
import {appUpdateSnapPoints} from '../../constants/modal_constant';
import {HAS_SHOWN_APP_UPDATE} from '../../constants/async_storage_constant';

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

  const checkAppUpdate = async () => {
    const hasShownAppUpdate = await asyncStorageService.getItem(HAS_SHOWN_APP_UPDATE);
    console.log('=== has shown app update = ', hasShownAppUpdate);
    console.log('=== get current version = ');

    // if (!!hasShownAppUpdate) return;

    VersionCheck.needUpdate()
      .then(res => {
        console.log('==== need to update =', res.isNeeded);
        if (res.isNeeded) {
          bottomSheetRef.current?.setBodyContent(<AppUpdateBottomSheetComponent/>)
          modalRef.current?.present()
          asyncStorageService.setItem(HAS_SHOWN_APP_UPDATE, 'true');
        }
      });
  }

  checkAppUpdate();

  const syncAppTheme = () => {
    themeService.syncData(() => {
      dispatch(setAppThemes(Theme.getAll()));
    });
  }

  const handleAppStateChange = (nextAppState) => {
    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      syncAppTheme();
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