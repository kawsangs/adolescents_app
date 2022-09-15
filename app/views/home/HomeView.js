import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import HomeNavigationHeaderComponent from '../../components/home/HomeNavigationHeaderComponent';

import CardListComponent from '../../components/shared/CardListComponent';

import appUserService from '../../services/app_user_service';
import visitService from '../../services/visit_service';
import Category from '../../models/Category';

const HomeView = (props) => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const categories = Category.getParentCategories();

  useEffect(() => {
    let previousStatus = false;  // we store the previousStatus in order to prevent the syncUsers from calling twice when has internet connection
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (state.isConnected && state.isInternetReachable != previousStatus && state.isInternetReachable) {
        appUserService.syncUsers();
        visitService.syncVisits();
      }

      if (previousStatus != state.isInternetReachable) previousStatus = state.isInternetReachable;
    });

    return () => { unsubscribeNetInfo && unsubscribeNetInfo() }
  }, []);

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