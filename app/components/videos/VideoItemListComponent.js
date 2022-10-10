import React from 'react';
import {View, FlatList} from 'react-native';
import {Card, Title} from 'react-native-paper';

import videos from '../../db/json/videos.json';
import uuidv4 from '../../utils/uuidv4_util';
import {scrollViewPaddingBottom, screenHorizontalPadding} from '../../constants/component_constant';

const VideoItemListComponent = (props) => {
  const renderItem = (item, index) => {
    // return videos.map((video, index) => {
    //   return (
    //     <Card>
    //       <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    //       <Card.Title title={video.title} />
    //     </Card>
    //   )
    // })

    return (
      <Card style={{marginBottom: 13}}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title title={item.title} />
      </Card>
    )
  }

  return (
    <FlatList
      // key={uuidv4()}
      data={videos}
      renderItem={(item, i) => renderItem(item, i)}
      keyExtractor={item => uuidv4()}
      contentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingTop: screenHorizontalPadding, paddingBottom: scrollViewPaddingBottom, borderWidth: 1}}
    />

    // <View style={{borderWidth: 1}}>
    //   {renderCards()}
    // </View>
  )
}

export default VideoItemListComponent;