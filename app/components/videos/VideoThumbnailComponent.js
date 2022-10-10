import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import youtubeHelper from '../../helpers/youtube_helper';
import componentUtil from '../../utils/component_util';
import {cardBorderRadius} from '../../constants/component_constant';

const HEIGHT = 180;

const VideoThumbnailComponent = (props) => {
  const renderPlayButton = () => {
    return <TouchableOpacity onPress={() => youtubeHelper.openVideo(props.url)} style={styles.playBtn}>
              <FeatherIcon name="play" size={24} color={color.primaryColor} style={{marginLeft: 2}} />
           </TouchableOpacity>
  }

  const renderThumbnail = () => {
    return (
      <TouchableOpacity onPress={() => console.log('view detail')} style={{justifyContent: 'center', height: HEIGHT}}>
        {renderPlayButton()}
        <Image source={{ uri: youtubeHelper.getThumbnail(props.url) }} resizeMode='cover' style={styles.image} />
      </TouchableOpacity>
    )
  }

  if (!!props.hasInternet)
    return renderThumbnail()

  return <View style={styles.emptyBackground}>
            <FeatherIcon name='video-off' size={24} color={color.grayColor} />
         </View>
}

const styles = StyleSheet.create({
  playBtn: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderRadius: 32,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    height: componentUtil.pressableItemSize(),
    width: componentUtil.pressableItemSize(),
  },
  image: {
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius,
    flex: 1,
  },
  emptyBackground: {
    alignItems: 'center',
    backgroundColor: color.lightGrayColor,
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius,
    justifyContent: 'center',
    height: HEIGHT,
  }
});

export default VideoThumbnailComponent;