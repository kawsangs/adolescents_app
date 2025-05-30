import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

import EmptyMediaComponent from '../shared/EmptyMediaComponent';
import color from '../../themes/color';
import youtubeHelper from '../../helpers/youtube_helper';
import componentUtil from '../../utils/component_util';
import {isLowPixelDensityDevice, getStyleOfDevice} from '../../utils/responsive_util';
import {cardBorderRadius} from '../../constants/component_constant';

const HEIGHT = getStyleOfDevice(200, isLowPixelDensityDevice() ? 150 : 180);

const VideoThumbnailComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);

  const renderPlayButton = () => {
    return <View style={styles.playBtn}>
              <FeatherIcon name="play" size={24} color={appTheme.primary_color ?? color.primaryColor} style={{marginLeft: 2}} />
           </View>
  }

  const renderThumbnail = () => {
    return (
      <View style={[{justifyContent: 'center', height: HEIGHT}, props.thumbnailStyle]}>
        {renderPlayButton()}
        <Image source={{ uri: youtubeHelper.getThumbnail(props.url) }} resizeMode='cover' style={styles.image} />
      </View>
    )
  }

  if (!!props.hasInternet)
    return renderThumbnail()

  return <EmptyMediaComponent isImage={false} style={[styles.emptyBackground, props.emptyComponentStyle]}/>
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
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius,
    justifyContent: 'center',
    height: HEIGHT,
  }
});

export default VideoThumbnailComponent;