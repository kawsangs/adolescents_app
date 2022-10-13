import React from 'react';
import {View, Text, Image} from 'react-native';
import {useTranslation} from 'react-i18next';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import BoldLabelComponent from '../../components/shared/BoldLabelComponent';
import LoginSelectionButtonsComponent from '../../components/loginSelections/LoginSelectionButtonsComponent';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/loginSelectionViewStyles';
import mobileStyles from '../../assets/stylesheets/mobile/loginSelectionViewStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const LoginSelectionView = (props) => {
  const {t} = useTranslation();
  const renderBody = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image source={require('../../assets/images/app_logo.png')} resizeMode='contain' style={styles.logo} />
        <BoldLabelComponent label={t('welcomeToYouthHealth')} style={styles.title} />

        <Text style={styles.label}>{t('youCanUseThisAppInFollowingChoices')}</Text>
        <LoginSelectionButtonsComponent/>
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