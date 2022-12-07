import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import NetInfo from '@react-native-community/netinfo';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import VideoItemListComponent from '../../components/videos/VideoItemListComponent';
import PlayVideoModalComponent from '../../components/playVideoModals/PlayVideoModalComponent';

import Video from '../../models/Video';
import networkService from '../../services/network_service';

const VideoView = (props) => {
  const {t} = useTranslation();
  const [hasInternet, setHasInternet] = useState(true);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (hasInternet != state.isInternetReachable)
        setHasInternet(state.isInternetReachable);
    });

    return () => { unsubscribeNetInfo && unsubscribeNetInfo() }
  }, []);

  const playVideo = (videoUuid) => {
    networkService.checkConnection(() => setHasInternet(true), () => setHasInternet(false));
    setPlayingVideo(Video.findByUuid(videoUuid));
    setModalVisible(true);
  }

  return (
    <View style={{flexGrow: 1}}>
      <GradientScrollViewComponent
        header={<NavigationHeaderComponent leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>} label={t('video')} />}
        body={<VideoItemListComponent categoryUuid={null} hasInternet={hasInternet} playVideo={playVideo} />}
        scrollViewStyle={{marginTop: 16}}
      />

      <PlayVideoModalComponent modalVisible={modalVisible} setModalVisible={(status) => setModalVisible(status)}
        video={playingVideo} hasInternet={hasInternet}
      />
    </View>
  )
}

export default VideoView;