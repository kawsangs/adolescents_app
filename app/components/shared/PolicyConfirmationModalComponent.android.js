import React, {useState} from 'react';
import {View, Linking} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {useTranslation, Trans} from 'react-i18next';
import { useSelector } from 'react-redux';

import BottomSheetModalMainComponent from './BottomSheetModalMainComponent';
import BoldLabelComponent from './BoldLabelComponent';
import CustomAudioPlayerButtonComponent from './CustomAudioPlayerButtonComponent';
import PolicyConfirmationButtonComponent from './policyConfirmationModals/PolicyConfirmationButtonComponent';
import color from '../../themes/color';
import {signUpConfirmationContentHeight} from '../../constants/modal_constant';
import {PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL} from '../../constants/main_constant';
import audioSources from '../../constants/audio_source_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/policyConfirmationModalComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/policyConfirmationModalComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const PolicyConfirmationModalComponent = (props) => {
  const {t} = useTranslation();
  const [playingUuid, setPlayingUuid] = useState(null);
  const appTheme = useSelector(state => state.appTheme.value);
  const renderIcon = () => {
    return <View style={styles.infoIcon}>
              <Icon name="exclamation" size={18} color={color.secondaryColor} />
           </View>
  }

  const saveUser = () => {
    setPlayingUuid(null)
    !!props.saveUser && props.saveUser()
  }

  const renderContent = () => {
    const primaryColor = appTheme.primary_color ?? color.primaryColor;
    return <React.Fragment>
              <Text style={styles.instruction}>
                <Trans
                  i18nKey='termsOfRegistrationDescription'
                  components={{
                    bold: <BoldLabelComponent label={`"${t('confirm')}"`} style={styles.instruction}/>,
                    privacyLink: <Text onPress={() =>  Linking.openURL(PRIVACY_POLICY_URL)} style={{color: primaryColor}}/>,
                    termsLink: <Text onPress={() =>  Linking.openURL(TERMS_AND_CONDITIONS_URL)} style={{color: primaryColor}}/>
                  }}
                />
              </Text>
              <Text style={styles.redNotice}>{t('yourConfidentialityAndSecurityAreOurPriority')}</Text>
              <PolicyConfirmationButtonComponent saveUser={() => saveUser()} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}/>
           </React.Fragment>
  }

  const renderAudioBtn = () => {
    return <CustomAudioPlayerButtonComponent
              audio={audioSources['0.39.mp3']}
              itemUuid='privacy-policy-terms'
              buttonColor="transparent"
              containerStyle={styles.titleAudioBtn}
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              accessibilityLabel='ប៊ូតុងចាក់សម្លេងលក្ខខណ្ឌចុះឈ្មោះ'
           />
  }

  return (
    <BottomSheetModalMainComponent
      title={t('termsOfRegistration')}
      titleIcon={renderIcon()}
      titleStyle={styles.title}
      titleContainerStyle={styles.titleContainer}
      containerStyle={{height: hp(signUpConfirmationContentHeight)}}
      scrollViewStyle={{paddingVertical: 0}}
      audioButton={renderAudioBtn()}
    >
      {renderContent()}
    </BottomSheetModalMainComponent>
  )
}

export default PolicyConfirmationModalComponent;