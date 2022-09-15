import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import HomeNavigationHeaderComponent from '../../components/home/HomeNavigationHeaderComponent';
import HomeHorizontalCardListComponent from '../../components/home/HomeHorizontalCardListComponent';
import HomeTiltedCardListComponent from '../../components/home/HomeTiltedCardListComponent';

import appUserService from '../../services/app_user_service';

const HomeView = () => {
  const [playingUuid, setPlayingUuid] = useState(null);

  useEffect(() => {
    let previousStatus = false;  // we store the previousStatus in order to prevent the syncUsers from calling twice when has internet connection
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (state.isConnected && state.isInternetReachable != previousStatus && state.isInternetReachable)
        appUserService.syncUsers();

      if (previousStatus != state.isInternetReachable) previousStatus = state.isInternetReachable;
    });

    return () => { unsubscribeNetInfo && unsubscribeNetInfo() }
  }, []);

  const renderBody = () => {
    return (
      <React.Fragment>
        <HomeHorizontalCardListComponent playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}/>
        <HomeTiltedCardListComponent playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}/>
      </React.Fragment>
    )
  }

  return (
    <GradientScrollViewComponent
      header={<HomeNavigationHeaderComponent/>}
      body={renderBody()}
    />
  )
}

export default HomeView