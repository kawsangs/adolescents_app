import React from 'react';
import {Animated} from 'react-native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import TopicDetailMainComponent from '../../components/topicDetails/TopicDetailMainComponent';
import TopicDetailNavigationHeaderComponent from '../../components/topicDetails/TopicDetailNavigationHeaderComponent';

const TopicDetailView = (props) => {
  const scrollY = new Animated.Value(0);

  return (
    <GradientScrollViewComponent
      header={<TopicDetailNavigationHeaderComponent label={props.route.params.name} scrollY={scrollY} />}
      body={<TopicDetailMainComponent uuid={props.route.params.uuid} topicUuid={props.route.params.topic_uuid} type={props.route.params.type} />}
      scrollViewStyle={{paddingHorizontal: 0}}
      onScroll={(e) => scrollY.setValue(e.nativeEvent.contentOffset.y)}
    />
  )
}

export default TopicDetailView;