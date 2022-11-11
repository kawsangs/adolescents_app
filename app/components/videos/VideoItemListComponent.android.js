import React, {useEffect, useState} from 'react';
import {Card} from 'react-native-paper';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import VideoThumbnailComponent from './VideoThumbnailComponent';
import Video from '../../models/Video';
import {xLargeFontSize} from '../../utils/font_size_util';
import {cardBorderRadius, cardElevation} from '../../constants/component_constant';
import {navigationRef} from '../../navigators/app_navigator';
import visitService from '../../services/visit_service';

const VideoItemListComponent = (props) => {
  const [videos, setVideos] = useState(Video.getAll());

  useEffect(() => {
    setVideos(!!props.categoryUuid ? Video.findByCategoryUuid(props.categoryUuid) : Video.getAll());
  }, [props.categoryUuid]);

  const viewDetail = (video) => {
    visitService.recordVisitVideo(video, () => {
      navigationRef.current?.navigate("PlayVideoView", { uuid: video.uuid, hasInternet: props.hasInternet });
    });
  }

  const renderItem = (item, index) => {
    return (
      <Card mode="elevated" elevation={cardElevation} onPress={() => viewDetail(item)}
        style={{marginBottom: 13, borderRadius: cardBorderRadius}} key={`video-${index}`}
      >
        <VideoThumbnailComponent url={item.url} hasInternet={props.hasInternet} viewDetail={() => viewDetail(item)} />
        <BoldLabelComponent label={item.name} numberOfLines={2} style={{fontSize: xLargeFontSize(), margin: 8, lineHeight: 28}} />
      </Card>
    )
  }

  return videos.map((video, index) => {
    return renderItem(video, index);
  })
}

export default VideoItemListComponent;