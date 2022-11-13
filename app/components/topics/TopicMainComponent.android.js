import React from 'react';

import TopicListComponent from '../shared/TopicListComponent';
import Topic from '../../models/Topic';
import {navigationRef} from '../../navigators/app_navigator';
import visitService from '../../services/visit_service';

const TopicMainComponent = (props) => {
  const [playingUuid, setPlayingUuid] = React.useState(null);

  const onPress = (item) => {
    visitService.recordVisitTopic(item, () => {
      navigationRef.current?.navigate('QuestionView', {uuid: item.uuid, name: item.name})
    });
  }

  return (
    <TopicListComponent items={Topic.getAll()} onPress={(item, moveNext) => onPress(item)}
      playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} hideAudio={false}
    />
  )
}

export default TopicMainComponent;