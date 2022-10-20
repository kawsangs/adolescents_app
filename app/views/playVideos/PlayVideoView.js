import React from 'react';
import {Dimensions, View, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';

import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import color from '../../themes/color';
import Video from '../../models/Video';

const PlayVideoView = (props) => {
  const video = Video.findByUuid(props.route.params.uuid);

  return (
    <View style={{flex: 1}}>
      <NavigationHeaderWithBackButtonComponent label={video.name} />
    </View>
  )
}

export default PlayVideoView;