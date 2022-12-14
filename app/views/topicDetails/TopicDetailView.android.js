import React, {useCallback} from 'react';
import {Animated} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import AutoScrollLabelComponent from '../../components/shared/AutoScrollLabelComponent';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import TopicDetailMainComponent from '../../components/topicDetails/TopicDetailMainComponent';
import audioPlayerService from '../../services/audio_player_service';

const TopicDetailView = (props) => {
  useFocusEffect(
    useCallback(() => {
      return () => audioPlayerService.clearAllAudio()
    }, [])
  );

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent customTitle={<AutoScrollLabelComponent label={props.route.params.name} />} />}
      body={<TopicDetailMainComponent uuid={props.route.params.uuid} topicUuid={props.route.params.topic_uuid} type={props.route.params.type} />}
      scrollViewStyle={{paddingHorizontal: 0}}
    />
  )
}

export default TopicDetailView;