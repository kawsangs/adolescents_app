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

const VideoItemListComponent = (props) => {
  const video = new Video();
  const [videos, setVideos] = useState(video.getAll());
  const [hasInternet, setHasInternet] = useState(true);

  useEffect(() => {
    setVideos(!!props.categoryUuid ? video.findByCategoryUuid(props.categoryUuid) : video.getAll());

    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (hasInternet != state.isInternetReachable)
        setHasInternet(state.isInternetReachable);
    });

    return () => { unsubscribeNetInfo && unsubscribeNetInfo() }
  }, [props.categoryUuid]);

  const renderItem = (item) => {
    return (
      <Card mode="elevated" elevation={cardElevation} onPress={() => console.log('View vid detail =====')}
        style={{marginBottom: 13, borderRadius: cardBorderRadius}}
      >
        <VideoThumbnailComponent url={item.url} hasInternet={hasInternet} />
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