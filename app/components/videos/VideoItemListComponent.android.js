import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import VideoThumbnailComponent from './VideoThumbnailComponent';
import uuidv4 from '../../utils/uuidv4_util';
import {scrollViewPaddingBottom, screenHorizontalPadding} from '../../constants/component_constant';
import Video from '../../models/Video';
import {xLargeFontSize} from '../../utils/font_size_util';
import {cardBorderRadius, cardElevation} from '../../constants/component_constant';
import {navigationRef} from '../../navigators/app_navigator';

const VideoItemListComponent = (props) => {
  const [videos, setVideos] = useState(Video.getAll());

  useEffect(() => {
    setVideos(!!props.categoryUuid ? Video.findByCategoryUuid(props.categoryUuid) : Video.getAll());
  }, [props.categoryUuid]);

  const playVideo = (uuid) => {
    navigationRef.current?.navigate("PlayVideoView", { uuid: uuid, hasInternet: props.hasInternet });
  }

  const renderItem = (item) => {
    return (
      <Card mode="elevated" elevation={cardElevation} onPress={() => playVideo(item.uuid)}
        style={{marginBottom: 13, borderRadius: cardBorderRadius}}
      >
        <VideoThumbnailComponent url={item.url} hasInternet={props.hasInternet} viewDetail={() => viewDetail(item.uuid)} />
        <BoldLabelComponent label={item.name} numberOfLines={2} style={{fontSize: xLargeFontSize(), margin: 8, lineHeight: 28}} />
      </Card>
    )
  }

  return (
    <FlatList
      data={videos}
      renderItem={({item, i}) => renderItem(item)}
      keyExtractor={item => uuidv4()}
      contentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingTop: screenHorizontalPadding, paddingBottom: scrollViewPaddingBottom}}
    />
  )
}

export default VideoItemListComponent;