import React, {useEffect} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import SurveyNavigationHeaderComponent from '../../components/surveys/SurveyNavigationHeaderComponent';
import SurveyContentComponent from '../../components/surveys/SurveyContentComponent';
import uuidv4 from '../../utils/uuidv4_util';
import Survey from '../../models/Survey';
import User from '../../models/User';
import Notification from '../../models/Notification';

const SurveyView = ({route, navigation}) => {
  const uuid = uuidv4();
  useEffect(() => {
    // Notification.update(route.params.uuid, {read: true});
    createSurvey();
  }, []);

  const createSurvey = () => {
    Survey.create({
      uuid,
      user_uuid: User.currentLoggedIn().uuid,
      form_id: 1,
      // form_id: route.params.form_id,
      surveyed_at: new Date()
    });
  }

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