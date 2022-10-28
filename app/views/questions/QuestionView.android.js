import React from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import QuestionMainComponent from '../../components/questions/QuestionMainComponent';

const QuestionView = (props) => {
  const [title, setTitle] = React.useState(props.route.params.name);

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={title} />}
      body={<QuestionMainComponent topicUuid={props.route.params.uuid} updateTitle={(name) => setTitle(name)} />}
      scrollViewStyle={{paddingHorizontal: 0, paddingBottom: 0}}
    />
  )
}

export default QuestionView;