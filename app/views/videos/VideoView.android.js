import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import NetInfo from '@react-native-community/netinfo';
import YoutubePopupPlayer from 'react-native-youtube-popup-player';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import VideoItemListComponent from '../../components/videos/VideoItemListComponent';
import VideoNavHeaderComponent from '../../components/videos/VideoNavHeaderComponent';
import Video from '../../models/Video';
import networkService from '../../services/network_service';
import {xLargeFontSize} from '../../utils/font_size_util';

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
        header={<VideoNavHeaderComponent navigation={props.navigation}/>}
        body={<VideoItemListComponent categoryUuid={null} hasInternet={hasInternet} playVideo={playVideo} />}
        isNotScrollView={true}
      />

      <YoutubePopupPlayer
        videoUrl={!!playingVideo ? playingVideo.url : null}
        modalVisible={modalVisible}
        hasInternet={hasInternet}
        playerPaddingTop={hp('34%')}
        messageLabelStyle={{fontSize: xLargeFontSize()}}
        closeModal={() => setModalVisible(false)}
      />
    </View>
  )
}

export default VideoView;