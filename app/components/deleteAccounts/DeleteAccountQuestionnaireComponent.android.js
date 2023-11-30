import React, {useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';

import SurveySelectOneQuestionComponent from '../surveys/SurveySelectOneQuestionComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import AlertModalComponent from '../shared/AlertModalComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import uuidv4 from '../../utils/uuidv4_util';
import appUserService from '../../services/app_user_service';
import navigationService from '../../services/navigation_service';
import {resetSelectedVidAuthor} from '../../features/videos/filterVideoAuthorSlice';
import {resetSelectedLocation} from '../../features/facilities/filterFacilityLocationSlice';

const DeleteAccountQuestionnaireComponent = (props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderQuestion = () => {
    const options = props.reasons.map(reason => ({value: reason.code, name: reason.name_km, id: reason.id}));
    return <View style={{padding: 16, marginBottom: 16, borderWidth: 1.5, borderColor: '#dbdbdb', borderRadius: 10, backgroundColor: color.whiteColor}}>
              <Text style={{marginBottom: 6, fontSize: largeFontSize(), lineHeight: 26}}>
                {t('pleaseProvideReasonYouWantToDeleteYourAccount')}
              </Text>
              <SurveySelectOneQuestionComponent
                key={uuidv4()}
                surveyUuid='deleteAccount'
                question={{id: 'question1', code: 'question1'}}
                options={options}
                buttonColor={color.primaryColor}
                currentAnswer={answer}
                updateAnswer={(answer) => setAnswer(answer)}
              />
           </View>
  }

  const deleteUser = () => {
    if (!answer)
      return;

    dispatch(resetSelectedVidAuthor())
    dispatch(resetSelectedLocation())
    appUserService.deleteCurrentUser(answer.value);
    navigationService.logOut(true);
  }

  const confirmMessage = () => {
    return <View style={{}}>
              <View style={{height: 80, width: 80, borderRadius: 80, borderColor: color.secondaryColor, borderWidth: 4, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                <Icon name="exclamation" size={36} color={color.secondaryColor} />
              </View>
              <Text style={{fontSize: largeFontSize(), marginLeft: 16, marginTop: 16, textAlign: 'center'}}>{t('doYouReallyWantToDeleteThisAccount')}</Text>
           </View>
  }

  return <View>
            {renderQuestion()}
            <BigButtonComponent
              label={t('deleteAccount')}
              uuid='save-button'
              style={{marginBottom: 16}}
              audio={null}
              playingUuid={null}
              updatePlayingUuid={(uuid) => {}}
              onPress={() => setModalVisible(true)}
              disabled={!answer}
              textColor={color.redColor}
            />

            <AlertModalComponent
              visible={modalVisible}
              message={() => confirmMessage()}
              onDismiss={() => setModalVisible(false)}
              onConfirm={() => deleteUser()}
              leftButtonLabel={t('cancel')}
              rightButtonLabel={t('delete')}
            />
         </View>
}

export default DeleteAccountQuestionnaireComponent;