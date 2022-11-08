import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

import PlayVideoHeaderComponent from '../../components/playVideos/PlayVideoHeaderComponent';
import PlayVideoWarningMessageComponent from '../../components/playVideos/PlayVideoWarningMessageComponent';
import color from '../../themes/color';
import Video from '../../models/Video';
import youtubeHelper from '../../helpers/youtube_helper';
import networkService from '../../services/network_service';

const PlayVideoView = (props) => {
  const video = Video.findByUuid(props.route.params.uuid);
  const [hasInternet, setHasInternet] = useState(true);
  useEffect(() => {
    networkService.checkConnection(() => setHasInternet(true), () => setHasInternet(false));
  }, []);

  const renderHeader = () => {
    return <PlayVideoHeaderComponent title={video.name} />
  }

  const renderContent = () => {
    if (!video.url || !hasInternet)
      return <PlayVideoWarningMessageComponent hasVideo={!!video.url} />;

    return <View style={{flex: 1, justifyContent: 'center'}}>
              <YoutubePlayer
                height={300}
                play={true}
                videoId={youtubeHelper.getVideoId(video.url)}
              />
           </View>
  }

  return (
    <View style={{backgroundColor: color.blackColor, flex: 1}}>
      { renderHeader() }
      { renderContent() }
    </View>
  )
}

export default PlayVideoView;