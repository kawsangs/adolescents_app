import React from 'react';

import TopicListComponent from '../shared/TopicListComponent';
import Topic from '../../models/Topic';
import Question from '../../models/Question';
import {navigationRef} from '../../navigators/app_navigator';
import visitService from '../../services/visit_service';
import {QUESTION} from '../../constants/faq_constant';

const TopicMainComponent = (props) => {
  const [playingUuid, setPlayingUuid] = React.useState(null);

  const onPress = (item) => {
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