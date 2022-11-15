import React, {useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import TopicListComponent from '../shared/TopicListComponent';
import Topic from '../../models/Topic';
import Question from '../../models/Question';
import {navigationRef} from '../../navigators/app_navigator';
import visitService from '../../services/visit_service';
import audioPlayerService from '../../services/audio_player_service';
import {QUESTION} from '../../constants/faq_constant';

const TopicMainComponent = (props) => {
  const [playingUuid, setPlayingUuid] = React.useState(null);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setPlayingUuid(null);
        setTimeout(() => {
          audioPlayerService.clearAllAudio();
        }, 100);
      }
    }, [])
  );

  const onPress = (item) => {
    setPlayingUuid(null);
    visitService.recordVisitTopic(item, () => {
      const question = Question.findByUuid(item.question_uuids[0]);
      navigationRef.current?.navigate("TopicDetailView", { uuid: question.uuid , name: question.name, topic_uuid: item.uuid, type: QUESTION });
    });
  }

  return (
    <TopicListComponent items={Topic.getAll()} onPress={(item, moveNext) => onPress(item)}
      playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} hideAudio={false}
    />
  )
}

export default TopicMainComponent;