import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import CustomAudioPlayerButtonComponent from '../../components/shared/CustomAudioPlayerButtonComponent';
import AlertModalComponent from '../../components/shared/AlertModalComponent';
import SurveySelectOneQuestionComponent from '../../components/surveys/SurveySelectOneQuestionComponent';
import BigButtonComponent from '../../components/shared/BigButtonComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import uuidv4 from '../../utils/uuidv4_util';
import appUserService from '../../services/app_user_service';
import navigationService from '../../services/navigation_service';
import {resetSelectedVidAuthor} from '../../features/videos/filterVideoAuthorSlice';
import {resetSelectedLocation} from '../../features/facilities/filterFacilityLocationSlice';

const DeleteAccountView = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [answer, setAnswer] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderQuestion = () => {
    const options = [
      {id: 1, name: 'ខ្ញុំឈប់ប្រើកម្មវិធីនេះ', value: 1},
      {id: 2, name: 'មិនមានព័ត៌មានដែលខ្ញុំចង់ដឹង', value: 2},
      {id: 3, name: 'ផ្សេងៗ', value: 3}
    ];

    return <View style={{padding: 16, marginBottom: 16, borderWidth: 1.5, borderColor: '#dbdbdb', borderRadius: 10, backgroundColor: color.whiteColor}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text style={{marginBottom: 6, fontSize: largeFontSize(), lineHeight: 26}}>
                    សូមបញ្ជាក់ពីមូលហេតុដែលអ្នកចង់លុបគណនីរបស់អ្នក
                  </Text>
                </View>
                <View style={{marginLeft: 4}}>
                  <CustomAudioPlayerButtonComponent
                    rippled={true}
                    itemUuid={'question1'}
                    audio={null}
                  />
                </View>
              </View>
              <SurveySelectOneQuestionComponent
                key={uuidv4()}
                surveyUuid='survey1'
                question={{id: 'q1', code: 'q1'}}
                options={options}
                buttonColor={color.primaryColor}
                currentAnswer={answer}
                updateAnswer={(answer) => setAnswer(answer)}
              />
           </View>
  }

  const renderContent = () => {
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
           </View>
  }

  const confirmMessage = () => {
    return <View style={{flexDirection: "row"}}>
              <Icon name="exclamation" size={22} color={color.secondaryColor} />
              <Text style={{fontSize: largeFontSize(), marginLeft: 16}}>{t('doYouReallyWantToDeleteThisAccount')}</Text>
           </View>
  }

  const deleteUser = () => {
    dispatch(resetSelectedVidAuthor())
    dispatch(resetSelectedLocation())
    appUserService.deleteCurrentUser();
    navigationService.logOut();
  }

  return (
    <React.Fragment>
      <GradientScrollViewComponent
        header={<NavigationHeaderWithBackButtonComponent label={t('deleteAccount')} />}
        body={renderContent()}
        scrollViewStyle={{paddingBottom: 86, paddingTop: 16}}
        scrollable={true}
      />

      <AlertModalComponent
        visible={modalVisible}
        message={() => confirmMessage()}
        onDismiss={() => setModalVisible(false)}
        onConfirm={() => deleteUser()}
        leftButtonLabel={t('cancel')}
        rightButtonLabel={t('delete')}
      />
    </React.Fragment>
  )
}

export default DeleteAccountView;