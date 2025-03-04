import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

import BoldLabelComponent from './BoldLabelComponent';
import VideoThumbnailComponent from '../videos/VideoThumbnailComponent';
import CustomFlatListComponent from './CustomFlatListComponent';
import { cardBorderRadius } from '../../constants/component_constant';
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
      <Card mode="elevated" elevation={1} onPress={() => viewDetail(video)} style={styles.card}>
        <View style={styles.container}>
          <VideoThumbnailComponent url={video.url} hasInternet={props.hasInternet} thumbnailStyle={styles.thumbnail} emptyComponentStyle={styles.thumbnail} />
          <View style={styles.labelContainer}>
            <BoldLabelComponent label={video.name} numberOfLines={2} style={{lineHeight: 22}} />
          </View>
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
        customContentContainerStyle={[{marginTop: 14, paddingLeft: 4}]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  thumbnail: {
    height: 90,
  },
  card: {
    marginBottom: 13,
    borderRadius: cardBorderRadius,
    marginRight: 16,
    backgroundColor: '#ffffff'
  },
  container: {
    flex: 1, // Ensures View inside Card follows flex rules
    flexDirection: "column", // Align children in a row
    height: 140,
    width: 180,
  },
  labelContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 3,
  }
})

export default VideoHorizontalListComponent;