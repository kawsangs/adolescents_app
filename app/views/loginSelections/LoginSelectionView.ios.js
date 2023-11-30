import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Toast from 'react-native-easy-toast';
import DeviceInfo from 'react-native-device-info';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import BoldLabelComponent from '../../components/shared/BoldLabelComponent';
import LoginSelectionButtonsComponent from '../../components/loginSelections/LoginSelectionButtonsComponent';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/loginSelectionViewStyles';
import mobileStyles from '../../assets/stylesheets/mobile/loginSelectionViewStyles';
import { environment } from '../../config/environment';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const LoginSelectionView = (props) => {
  const {t} = useTranslation();
  const toastRef = React.useRef(null);

  useEffect(() => {
    if (props.route.params && props.route.params.is_delete_account)
      toastRef.current?.show(t('deleteAccountMessage', {days: environment.accountDeletionDuration}))
  }, []);

  const renderBody = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image source={require('../../assets/images/logo.png')} resizeMode='contain' style={styles.logo} />
        <BoldLabelComponent label={t('youthHealth')} style={styles.title} />

        <Text style={styles.label}>{t('youCanUseThisAppInFollowingChoices')}</Text>
        <LoginSelectionButtonsComponent/>
        <Toast ref={toastRef} positionValue={DeviceInfo.hasNotch() ? 140 : 120} fadeOutDuration={7000}/>
      </View>
    )
  }

  return (
    <GradientScrollViewComponent
      scrollable={false}
      scrollViewStyle={{paddingBottom: 0, paddingHorizontal: 34}}
      body={renderBody()}
    />
  )
}

export default LoginSelectionView;