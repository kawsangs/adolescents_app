import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import NetInfo from '@react-native-community/netinfo';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import VideoItemListComponent from '../../components/videos/VideoItemListComponent';
import {gradientScrollViewBigPaddingBottom} from '../../constants/ios_component_constant';

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

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderComponent leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>} label={t('video')} />}
      body={<VideoItemListComponent categoryUuid={null} hasInternet={hasInternet} />}
      scrollViewStyle={{marginTop: 16, paddingBottom: gradientScrollViewBigPaddingBottom}}
    />
  )
}

export default VideoView
