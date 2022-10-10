import React from 'react';
import {Dimensions, View, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';

import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import ImageComponent from '../../components/shared/ImageComponent';
import color from '../../themes/color';
import Video from '../../models/Video';
import youtubeHelper from '../../helpers/youtube_helper';
import { largeFontSize } from '../../utils/font_size_util';
import { descriptionLineHeight, screenHorizontalPadding, scrollViewPaddingBottom } from '../../constants/component_constant';

const imageHeight = Dimensions.get('window').height / 4;
const VideoDetailView = (props) => {
  const video = new Video().findByUuid(props.route.params.uuid);

  return (
    <View style={{flex: 1}}>
      <NavigationHeaderWithBackButtonComponent label={video.name} />

      <ScrollView contentContainerStyle={{paddingBottom: scrollViewPaddingBottom, backgroundColor: color.whiteColor}}>
        <ImageComponent source={{uri: youtubeHelper.getThumbnail(video.url)}} resizeMode="cover" imageStyle={{height: imageHeight}} emptyStyle={{height: imageHeight}} />

        <Text style={{fontSize: largeFontSize(), lineHeight: descriptionLineHeight, margin: screenHorizontalPadding}}>
          {video.description}
          {video.description}
        </Text>
      </ScrollView>
    </View>
  )
}

export default VideoDetailView;