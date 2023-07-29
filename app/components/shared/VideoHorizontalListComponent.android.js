import React, {useState} from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';

import BoldLabelComponent from './BoldLabelComponent';
import VideoThumbnailComponent from '../videos/VideoThumbnailComponent';
import CustomFlatListComponent from './CustomFlatListComponent';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import visitService from '../../services/visit_service';
import {descriptionFontSize} from '../../utils/font_size_util';

const VideoHorizontalListComponent = (props) => {
  const viewDetail = (video) => {
    visitService.recordVisitVideo(video, () => {
      props.playVideo(video.uuid)
    });
  }

  const renderItem = (video, index) => {
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

  return (
    <View style={{marginTop: 12}}>
      <BoldLabelComponent label='វីដេអូ:' style={{fontSize: descriptionFontSize()}} />
      
      <CustomFlatListComponent
        data={props.videos}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={item => item.uuid}
        horizontal={true}
        customContentContainerStyle={[{paddingRight: 4, paddingBottom: 4, alignItems: 'center', height: 155, marginTop: 14}]}
      />
    </View>
  )
}

export default VideoHorizontalListComponent;