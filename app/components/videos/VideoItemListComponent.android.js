import React, {useEffect, useState, useRef} from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import CustomFlatListComponent from '../shared/CustomFlatListComponent';
import NoResultMessageComponent from '../shared/NoResultMessageComponent';
import VideoThumbnailComponent from './VideoThumbnailComponent';
import Video from '../../models/Video';
import VideoAuthor from '../../models/VideoAuthor';
import {getStyleOfDevice} from '../../utils/responsive_util';
import {cardBorderRadius, cardElevation} from '../../constants/component_constant';
import {screenHorizontalPadding, gradientScrollViewPaddingBottom} from '../../constants/component_constant';
import visitService from '../../services/visit_service';
import videoSyncService from '../../services/video_sync_service';
import videoAuthorSyncService from '../../services/video_author_sync_service';
import tabletStyles from '../../assets/stylesheets/tablet/videoItemListComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/videoItemListComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const VideoItemListComponent = (props) => {
  const [videos, setVideos] = useState(Video.getAll());
  const {t} = useTranslation();
  const listRef = useRef();
  const selectedVidAuthor = useSelector(state => state.filterVideoAuthor);

  useEffect(() => {
    if(selectedVidAuthor.uuid == '045f6859-1cb8-4ec0-8604-82472e4ddf2f') {
      return setVideos([])
    }

    setVideos(!!selectedVidAuthor.uuid ? Video.findByAuthor(selectedVidAuthor.uuid) : Video.getAll())
  }, [selectedVidAuthor])

  const viewDetail = (video) => {
    visitService.recordVisitVideo(video, () => {
      props.playVideo(video.uuid)
    });
  }

  const renderItem = (video) => {
    return (
      <Card mode="elevated" elevation={cardElevation} onPress={() => viewDetail(video)}
        style={{marginBottom: 13, borderRadius: cardBorderRadius}} key={video.uuid}
      >
        <VideoThumbnailComponent url={video.url} hasInternet={props.hasInternet} viewDetail={() => viewDetail(video)} />
        <View style={styles.labelContainer}>
          <BoldLabelComponent label={video.name} numberOfLines={2} style={styles.title} />
          <Text style={styles.author} numberOfLines={1}>{t('author')}: {VideoAuthor.getName(video.author_uuid)}</Text>
        </View>
      </Card>
    )
  }

  const onEndReached = () => {
    if (!!selectedVidAuthor.uuid)
      return listRef.current?.stopPaginateLoading()

    videoSyncService.syncData(Video.getStartingPage() + 1, () => {
      listRef.current?.stopPaginateLoading()
    }, () => listRef.current?.stopPaginateLoading())
  }

  const onRefresh = () => {
    videoSyncService.syncData(1, () => {
      videoAuthorSyncService.syncAllData(() => listRef.current?.stopRefreshLoading())
    }, () => listRef.current?.stopRefreshLoading())
  }

  if (videos.length == 0)
    return <NoResultMessageComponent/>

  return <CustomFlatListComponent
            ref={listRef}
            data={videos}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item.uuid}
            hasInternet={props.hasInternet}
            endReachedAction={() => onEndReached()}
            refreshingAction={() => onRefresh()}
            customContentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingBottom: gradientScrollViewPaddingBottom + 170}}
            style={{paddingTop: 16}}
          />
}

export default VideoItemListComponent;