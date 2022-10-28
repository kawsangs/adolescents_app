import React from 'react';

import TopicListComponent from '../shared/TopicListComponent';
import Topic from '../../models/Topic';
import {navigationRef} from '../../navigators/app_navigator';

const TopicMainComponent = (props) => {
  return (
    <TopicListComponent items={Topic.getAll()} onPress={(item, moveNext, index) => navigationRef.current?.navigate('QuestionView', {uuid: item.uuid, name: item.name})} />
  )
}

export default TopicMainComponent;