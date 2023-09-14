import React from 'react';
import {View, StyleSheet} from 'react-native';
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
        style={{marginBottom: 13, borderRadius: cardBorderRadius, width: 150, height: 140, marginRight: 16}} key={video.uuid}
      >
        <VideoThumbnailComponent url={video.url} hasInternet={props.hasInternet} thumbnailStyle={styles.thumbnail} emptyComponentStyle={styles.thumbnail} />
        <View style={{paddingHorizontal: 8, paddingVertical: 4, flex: 1, justifyContent: 'center'}}>
          <BoldLabelComponent label={video.name} numberOfLines={2} style={{lineHeight: 22}} />
        </View>
      </Card>
    )
  }

  if (props.videos.length == 0) return <View/>

  return (
    <View style={{marginTop: 30}}>
      <BoldLabelComponent label='វីដេអូ:' style={{fontSize: descriptionFontSize()}} />

      <CustomFlatListComponent
        data={props.videos}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={item => item.uuid}
        horizontal={true}
        customContentContainerStyle={[{alignItems: 'center', marginTop: 14, paddingLeft: 4}]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  thumbnail: {
    height: 90,
  }
})

export default VideoHorizontalListComponent;