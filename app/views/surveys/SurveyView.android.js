import React, {useEffect, useState} from 'react';
import NetInfo from "@react-native-community/netinfo";

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import SurveyNavigationHeaderComponent from '../../components/surveys/SurveyNavigationHeaderComponent';
import SurveyContentComponent from '../../components/surveys/SurveyContentComponent';
import SurveyRedownloadButtonComponent from '../../components/surveys/SurveyRedownloadButtonComponent';
import uuidv4 from '../../utils/uuidv4_util';
import Survey from '../../models/Survey';
import User from '../../models/User';
import Notification from '../../models/Notification';
import surveyService from '../../services/survey_service';

const uuid = uuidv4();

const SurveyView = ({route, navigation}) => {
  const [hasInternet, setHasInternet] = useState(false);
  const [hasForm, setHasForm] = useState(false);

  useEffect(() => {
    NetInfo.fetch().then(state => {
      setHasInternet(state.isConnected);
    });

    Notification.update(route.params.uuid, {read: true});
    const isFormExist = surveyService.isExist(route.params.topic_id);
    setHasForm(isFormExist);
    if (!isFormExist)
      surveyService.findAndSave(route.params.topic_id, () => createNewSurvey());
    else
      createNewSurvey();
  }, []);

  const createNewSurvey = () => {
    setHasForm(true);
    Survey.create({
      uuid,
      user_uuid: User.currentLoggedIn().uuid,
      topic_id: route.params.topic_id,
      surveyed_at: new Date(),
      notification_id: Notification.findByUuid(route.params.uuid).id,
    });
  }

  const renderContent = () => {
    // if (!hasInternet && !hasForm)
      return <SurveyRedownloadButtonComponent topicId={route.params.topic_id} createNewSurvey={createNewSurvey} />

    return <SurveyContentComponent topicId={route.params.topic_id} surveyUuid={uuid} />
  }

  return (
    <GradientScrollViewComponent
      header={<SurveyNavigationHeaderComponent title={route.params.title} surveyUuid={uuid} />}
      body={renderContent()}
      isNotScrollView={true}
      scrollViewStyle={{paddingBottom: 16}}
    />
  )
}

export default SurveyView;