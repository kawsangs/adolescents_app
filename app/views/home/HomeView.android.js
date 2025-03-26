import React, {useCallback, useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import HomeNavigationHeaderComponent from '../../components/home/HomeNavigationHeaderComponent';
import CardListComponent from '../../components/shared/CardListComponent';
import HomeAppThemeSectionComponent from '../../components/home/HomeAppThemeSectionComponent.android';

import syncService from '../../services/sync_service';
import audioPlayerService from '../../services/audio_player_service';
import MobileTokenService from '../../services/mobile_token_service';
import themeService from '../../services/theme_service';
import networkService from '../../services/network_service';
import categoryHelper from '../../helpers/category_helper';
import {setParentCategories} from '../../features/parentCategories/parentCategorySlice';
import color from '../../themes/color';
import { setAppThemes } from '../../features/appThemes/appThemeSlice';
import Theme from '../../models/Theme';

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

    networkService.checkConnection(() => {
      themeService.syncData(() => {
        dispatch(setAppThemes(Theme.getAll()));
      });
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
    return (
      <View>
        <CardListComponent items={categories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />
        <HomeAppThemeSectionComponent/>
      </View>
    )
  }

  return (
    <GradientScrollViewComponent
      header={<HomeNavigationHeaderComponent navigation={props.navigation}/>}
      body={renderBody()}
    />
  )
}

const styles = StyleSheet.create({
  editThemeButton: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 48,
    marginTop: 32,
    paddingHorizontal: 16,
  },
  buttonLabel: {
    color: color.primaryColor,
    fontSize: 16,
    marginLeft: 10,
  }
});

export default HomeView