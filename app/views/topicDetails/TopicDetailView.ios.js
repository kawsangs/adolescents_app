import React, {useCallback, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import TopicDetailNavigationHeaderComponent from '../../components/topicDetails/TopicDetailNavigationHeaderComponent';
import TopicDetailMainComponent from '../../components/topicDetails/TopicDetailMainComponent';
import audioPlayerService from '../../services/audio_player_service';

const TopicDetailView = (props) => {
  const [textSize, setTextSize] = useState(props.route.params.textSize)
  useFocusEffect(
    useCallback(() => {
      return () => audioPlayerService.clearAllAudio()
    }, [])
  );

  return (
    <GradientScrollViewComponent
      header={<TopicDetailNavigationHeaderComponent title={props.route.params.name} uuid={props.route.params.uuid} textSize={textSize} updateTextSize={(size) => setTextSize(size)} />}
      body={<TopicDetailMainComponent uuid={props.route.params.uuid} topicUuid={props.route.params.topic_uuid} type={props.route.params.type} textSize={textSize} />}
      scrollViewStyle={{paddingHorizontal: 0, paddingTop: 6}}
    />
  )
}

export default TopicDetailView;