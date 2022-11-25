import React, {useCallback} from 'react';
import {Animated} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import TopicDetailMainComponent from '../../components/topicDetails/TopicDetailMainComponent';
import TopicDetailNavigationHeaderComponent from '../../components/topicDetails/TopicDetailNavigationHeaderComponent';
import audioPlayerService from '../../services/audio_player_service';
import {scrollViewPaddingBottom} from '../../constants/ios_component_constant';

const TopicDetailView = (props) => {
  const scrollY = new Animated.Value(0);

  useFocusEffect(
    useCallback(() => {
      return () => audioPlayerService.clearAllAudio()
    }, [])
  );

  return (
    <GradientScrollViewComponent
      header={<TopicDetailNavigationHeaderComponent label={props.route.params.name} scrollY={scrollY} />}
      body={<TopicDetailMainComponent uuid={props.route.params.uuid} topicUuid={props.route.params.topic_uuid} type={props.route.params.type} />}
      scrollViewStyle={{paddingHorizontal: 0, paddingBottom: scrollViewPaddingBottom}}
      onScroll={(e) => scrollY.setValue(e.nativeEvent.contentOffset.y)}
    />
  )
}

export default TopicDetailView;