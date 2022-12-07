import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import  {PanGestureHandler} from 'react-native-gesture-handler'

import PlayVideoHeaderComponent from '../../components/playVideos/PlayVideoHeaderComponent';
import PlayVideoWarningMessageComponent from '../../components/playVideos/PlayVideoWarningMessageComponent';

import color from '../../themes/color';
import Video from '../../models/Video';
import youtubeHelper from '../../helpers/youtube_helper';
import networkService from '../../services/network_service';
import {navigationRef} from '../../navigators/app_navigator';

const PlayVideoView = (props) => {
  const video = Video.findByUuid(props.route.params.uuid);
  const [hasInternet, setHasInternet] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    networkService.checkConnection(() => setHasInternet(true), () => setHasInternet(false));
  }, []);

  const renderHeader = () => {
    return <PlayVideoHeaderComponent title={video.name} />
  }

  const renderContent = () => {
    if (!video.url || !hasInternet)
      return <PlayVideoWarningMessageComponent hasVideo={!!video.url} />;

    return <PanGestureHandler onGestureEvent={(evt) => navigationRef.current?.goBack()} activeOffsetY={[-70, 70]}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              { (hasInternet && isLoading) && <ActivityIndicator size="large" color={color.whiteColor} style={{position: 'absolute', alignSelf: 'center'}} /> }
              <YoutubePlayer
                height={hp("37%")}
                play={true}
                videoId={youtubeHelper.getVideoId(video.url)}
                onReady={() => setIsLoading(false)}
              />
            </View>
          </PanGestureHandler>
  }

  return (
    <View style={{backgroundColor: color.blackColor, flex: 1}}>
      { renderHeader() }
      { renderContent() }
    </View>
  )
}

export default PlayVideoView;