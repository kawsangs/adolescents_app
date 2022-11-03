import React, {useEffect, useState} from 'react';

import TopicListComponent from '../shared/TopicListComponent';
import Topic from '../../models/Topic';
import Question from '../../models/Question';
import Option from '../../models/Option';
import {navigationRef} from '../../navigators/app_navigator';
import {TOPIC, QUESTION, OPTION, QUESTION_FAQ} from '../../constants/faq_constant';
import topicHelper from '../../helpers/topic_helper';

const QuestionMainComponent = (props) => {
  const [items, setItems] = useState([]);
  const [questionUuid, setQuestionUuid] = useState(null);
  const [previousType, setPreviousType] = useState(TOPIC);

  useEffect(() => {
    if (props.type == QUESTION) {
      setItems(previousType == OPTION ? topicHelper.getNextQuestion(questionUuid, props.topicUuid) : Question.findByTopicUuid(props.topicUuid));
      showTopicAsTitle();
    }
  }, [props.type]);

  const showTopicAsTitle = () => {
    props.updateTitle(Topic.findByUuid(props.topicUuid).name);
  }

  const onPress = (item, moveNext) => {
    props.type == QUESTION ? onPressQuestion(item) : onPressOption(item, moveNext);
  }

  const onPressQuestion = (item) => {
    setPreviousType(QUESTION);
    // Redirect to detail screen if the selected question type is FAQ
    if (item.type == QUESTION_FAQ) {
      setQuestionUuid(null);
      return navigationRef.current?.navigate("TopicDetailView", { uuid: item.uuid , name: item.name, topic_uuid: props.topicUuid, type: QUESTION })
    }

    // If the selected question type is not FAQ then show the options of this question
    props.updateTitle(item.name);
    setQuestionUuid(item.uuid);
    setItems(Option.findByQuestionUuid(item.uuid));
    props.updateType(OPTION);
  }

  const onPressOption = (item, moveNext) => {
    if (!moveNext)    // Redirect to detail screen if the selected option move_next = false
      return navigationRef.current?.navigate("TopicDetailView", { uuid: item.uuid , name: item.name, topic_uuid: props.topicUuid, type: OPTION });

    // If the selected option move_next = true then show the next question
    setPreviousType(OPTION);
    showTopicAsTitle();
    props.updateType(QUESTION);
  }
  
  return (
    <TopicListComponent items={items} type={props.type} onPress={(item, moveNext) => onPress(item, moveNext)}
      playingUuid={props.playingUuid} updatePlayingUuid={props.updatePlayingUuid}
      hideAudio={props.type == OPTION}
    />
  )
}

export default QuestionMainComponent;