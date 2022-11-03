import React from 'react';

import TopicListComponent from '../shared/TopicListComponent';
import Topic from '../../models/Topic';
import {navigationRef} from '../../navigators/app_navigator';

const TopicMainComponent = (props) => {
  const [playingUuid, setPlayingUuid] = React.useState(null);

  return (
    <TopicListComponent items={Topic.getAll()} onPress={(item, moveNext) => navigationRef.current?.navigate('QuestionView', {uuid: item.uuid, name: item.name})}
      playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} hideAudio={false}
    />
  )
}

export default TopicMainComponent;