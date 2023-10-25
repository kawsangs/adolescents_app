import React, {useEffect} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import SurveyNavigationHeaderComponent from '../../components/surveys/SurveyNavigationHeaderComponent';
import SurveyContentComponent from '../../components/surveys/SurveyContentComponent';
import uuidv4 from '../../utils/uuidv4_util';
import Survey from '../../models/Survey';
import SurveyForm from '../../models/SurveyForm';
import User from '../../models/User';
import Notification from '../../models/Notification';
import surveyService from '../../services/survey_service';

const SurveyView = ({route, navigation}) => {
  const uuid = uuidv4();
  useEffect(() => {
    Notification.update(route.params.uuid, {read: true});
    if (!SurveyForm.findById(route.params.topic_id))
      surveyService.findAndSave(route.params.topic_id, () => createNewSurvey());
    else
      createNewSurvey();
  }, []);

  const createNewSurvey = () => {
    Survey.create({
      uuid,
      user_uuid: User.currentLoggedIn().uuid,
      topic_id: route.params.topic_id,
      surveyed_at: new Date(),
      notification_id: route.params.uuid
    });
  }

  return (
    <GradientScrollViewComponent
      header={<SurveyNavigationHeaderComponent title={route.params.title} surveyUuid={uuid} />}
      body={<SurveyContentComponent topicId={route.params.topic_id} surveyUuid={uuid} />}
      isNotScrollView={true}
      scrollViewStyle={{paddingBottom: 16}}
    />
  )
}

export default SurveyView;