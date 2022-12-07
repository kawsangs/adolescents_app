import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import VideoThumbnailComponent from './VideoThumbnailComponent';
import Video from '../../models/Video';

import {getStyleOfDevice} from '../../utils/responsive_util';
import {cardBorderRadius, cardElevation} from '../../constants/component_constant';
import {navigationRef} from '../../navigators/app_navigator';
import visitService from '../../services/visit_service';
import tabletStyles from '../../assets/stylesheets/tablet/videoItemListComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/videoItemListComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const VideoItemListComponent = (props) => {
  const [videos, setVideos] = useState(Video.getAll());
  const {t} = useTranslation();

  useEffect(() => {
    setVideos(!!props.categoryUuid ? Video.findByCategoryUuid(props.categoryUuid) : Video.getAll());
  }, [props.categoryUuid]);

  const viewDetail = (video) => {
    visitService.recordVisitVideo(video, () => {
      props.playVideo(video.uuid)

      // navigationRef.current?.navigate("PlayVideoView", { uuid: video.uuid, hasInternet: props.hasInternet });
    });
  }

  const renderItem = (item, index) => {
    return (
      <Card mode="elevated" elevation={cardElevation} onPress={() => viewDetail(item)}
        style={{marginBottom: 13, borderRadius: cardBorderRadius}} key={`video-${index}`}
      >
        <VideoThumbnailComponent url={item.url} hasInternet={props.hasInternet} viewDetail={() => viewDetail(item)} />
        <View style={styles.labelContainer}>
          <BoldLabelComponent label={item.name} numberOfLines={2} style={styles.title} />
          <Text style={styles.author} numberOfLines={1}>{t('author')}: {item.author}</Text>
        </View>
      </Card>
    )
  }

  return videos.map((video, index) => {
    return renderItem(video, index);
  })
}

export default VideoItemListComponent;