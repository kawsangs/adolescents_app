import React, {useEffect, useState} from 'react';

import TopicListComponent from '../shared/TopicListComponent';
import Topic from '../../models/Topic';
import Question from '../../models/Question';
import Option from '../../models/Option';
import {navigationRef} from '../../navigators/app_navigator';
import {QUESTION, OPTION, QUESTION_FAQ} from '../../constants/faq_constant';
import topicHelper from '../../helpers/topic_helper';

const QuestionMainComponent = (props) => {
  const [items, setItems] = useState([]);
  const [type, setType] = useState(QUESTION);
  const [questionUuid, setQuestionUuid] = useState(null);

  useEffect(() => {
    setItems(Question.findByTopicUuid(props.topicUuid))
  }, []);

  const onPress = (item, moveNext, index) => {
    props.updateTitle(item.name);
    switch(type) {
      case QUESTION:
        return onPressQuestion(item, index);
      case OPTION:
        return onPressOption(item, moveNext);
      default:
        return onPressTopic();
    }
  }

  const onPressTopic = () => {
    setItems(Question.findByTopicUuid(props.topicUuid));
    setType(QUESTION);
  }

  const onPressQuestion = (item, index) => {
    if (item.type == QUESTION_FAQ) {
      props.updateTitle(Topic.findByUuid(props.topicUuid).name);
      setQuestionUuid(null);
      return navigationRef.current?.navigate("TopicDetailView", { uuid: item.uuid , name: item.name, topic_uuid: props.topicUuid, type: QUESTION })
    }

    setQuestionUuid(item.uuid);
    setItems(Option.findByQuestionUuid(item.uuid));
    setType(OPTION);
  }

  const onPressOption = (item, moveNext) => {
    props.updateTitle(Topic.findByUuid(props.topicUuid).name);
    if (!moveNext)
      return navigationRef.current?.navigate("TopicDetailView", { uuid: item.uuid , name: item.name, topic_uuid: props.topicUuid, type: OPTION });

    setItems(topicHelper.getNextQuestion(questionUuid, props.topicUuid));
    setType(QUESTION);
  }
  
  return (
    <TopicListComponent items={items} type={props.type} onPress={(item, moveNext, index) => onPress(item, moveNext, index)} />
  )
}

export default QuestionMainComponent;