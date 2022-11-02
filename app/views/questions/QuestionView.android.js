import React from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import QuestionNavigationHeaderComponent from '../../components/questions/QuestionNavigationHeaderComponent';
import QuestionMainComponent from '../../components/questions/QuestionMainComponent';
import {QUESTION, OPTION} from '../../constants/faq_constant';
import {navigationRef} from '../../navigators/app_navigator';

const QuestionView = (props) => {
  const [title, setTitle] = React.useState(props.route.params.name);
  const [type, setType] = React.useState(QUESTION);

  const onPress = () => {
    if (type == OPTION)
      return setType(QUESTION);

    navigationRef.current?.goBack()
  }

  return (
    <GradientScrollViewComponent
      header={<QuestionNavigationHeaderComponent label={title} onPress={() => onPress()} />}
      body={<QuestionMainComponent topicUuid={props.route.params.uuid} type={type} updateTitle={(name) => setTitle(name)} updateType={(type) => setType(type)} />}
      scrollViewStyle={{paddingHorizontal: 0, paddingBottom: 0}}
    />
  )
}

export default QuestionView;