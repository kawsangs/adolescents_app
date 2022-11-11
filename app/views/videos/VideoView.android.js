import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import NetInfo from '@react-native-community/netinfo';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import VideoItemListComponent from '../../components/videos/VideoItemListComponent';

const VideoView = (props) => {
  const {t} = useTranslation();
  const [hasInternet, setHasInternet] = useState(true);

  useEffect(() => {
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (hasInternet != state.isInternetReachable)
        setHasInternet(state.isInternetReachable);
    });

    return () => { unsubscribeNetInfo && unsubscribeNetInfo() }
  }, []);

  const renderHeader = () => {
    return <NavigationHeaderComponent
              leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>}
              label={t('video')}
           />
  }

  const renderBody = () => {
    return <VideoItemListComponent categoryUuid={null} hasInternet={hasInternet} />
  }

  return (
    <GradientScrollViewComponent
      header={renderHeader()}
      body={renderBody()}
      scrollViewStyle={{marginTop: 16}}
    />
  )
}

export default VideoView
