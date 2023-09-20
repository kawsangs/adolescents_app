import React from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import SurveyNavigationHeaderComponent from '../../components/surveys/SurveyNavigationHeaderComponent';
import SurveyContentComponent from '../../components/surveys/SurveyContentComponent';
import uuidv4 from '../../utils/uuidv4_util';
import Survey from '../../models/Survey';
import User from '../../models/User';

const SurveyView = () => {
  const uuid = uuidv4();
  Survey.create({
    uuid,
    user_uuid: User.currentLoggedIn().uuid,
    form_id: 1,
    surveyed_at: new Date()
  });

  return (
    <GradientScrollViewComponent
      header={<SurveyNavigationHeaderComponent />}
      body={<SurveyContentComponent formId={1} surveyUuid={uuid}/>}
      scrollable={false}
      scrollViewStyle={{paddingBottom: 16}}
    />
  )
}

export default SurveyView;