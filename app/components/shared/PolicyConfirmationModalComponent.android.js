import React, {useEffect, useState} from 'react';
import {View, Linking} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
  const audioRef = React.createRef();
  const [playingUuid, setPlayingUuid] = useState(null);

  useEffect(() => {
    audioRef.current?.onPress();
  }, []);

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
    return <React.Fragment>
              <Text style={styles.instruction}>
                សូមអានលក្ខខណ្ឌខាងក្រោម មុនពេលធ្វើការចុះឈ្មោះចូលប្រើប្រាស់កម្មវិធី សុខភាពយុវជន។ ដោយចុច <BoldLabelComponent label='"យល់ព្រម"' style={styles.instruction}/> បញ្ចាក់ថាអ្នកបានអាន និងយល់ព្រមទៅនឹង {renderUrl('“គោលការណ៍ឯកជនភាព”', PRIVACY_POLICY_URL)} និង {renderUrl('“គោលការណ៍ និងលក្ខខណ្ឌ”', TERMS_AND_CONDITIONS_URL)} ប្រើប្រាស់កម្មវិធីសុខភាពយុវជន។
              </Text>
              <Text style={styles.redNotice}>ការសម្ងាត់ព័ត៌មាន និងសុវត្តិភាពអ្នកជាអាទិភាពរបស់យើង!</Text>
              <PolicyConfirmationButtonComponent saveUser={() => saveUser()} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}/>
           </React.Fragment>
  }

  const renderUrl = (label, url) => {
    return <Text onPress={() =>  Linking.openURL(url)} style={{color: color.primaryColor}}>{label}</Text>
  }

  const renderAudioBtn = () => {
    return <CustomAudioPlayerButtonComponent
              audioRef={audioRef}
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
      title='លក្ខខណ្ឌចុះឈ្មោះប្រើប្រាស់'
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