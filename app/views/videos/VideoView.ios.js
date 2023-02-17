import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import NetInfo from '@react-native-community/netinfo';
import DeviceInfo from 'react-native-device-info';
import YoutubePopupPlayer from 'react-native-youtube-popup-player';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import VideoItemListComponent from '../../components/videos/VideoItemListComponent';
import Video from '../../models/Video';
import networkService from '../../services/network_service';
import {getStyleOfDevice} from '../../utils/responsive_util';
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
        header={<NavigationHeaderComponent leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>} label={t('video')} />}
        body={<VideoItemListComponent categoryUuid={null} hasInternet={hasInternet} playVideo={playVideo} />}
        scrollViewStyle={{marginTop: 16, paddingBottom: getStyleOfDevice(250, DeviceInfo.hasNotch() ? 300 : 225)}}
      />

      <YoutubePopupPlayer
        videoUrl={!!playingVideo ? playingVideo.url : null}
        modalVisible={modalVisible}
        hasInternet={hasInternet}
        playerPaddingTop={hp(DeviceInfo.hasNotch() ? '34%' : '30%')}
        messageLabelStyle={{fontSize: xLargeFontSize()}}
        closeModal={() => setModalVisible(false)}
      />
    </View>
  )
}

export default VideoView
