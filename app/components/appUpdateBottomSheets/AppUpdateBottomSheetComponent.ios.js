import React, {useEffect, useState} from 'react';
import {View, Linking, StyleSheet, Platform} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';
import SpInAppUpdates from 'sp-react-native-in-app-updates';

import BottomSheetModalMainComponent from '../shared/BottomSheetModalMainComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import color from '../../themes/color';
import {appUpdateContentHeight} from '../../constants/modal_constant';
import {largeFontSize} from '../../utils/font_size_util';
import {bottomSheetTitleFontSize} from '../../constants/bottom_sheet_picker_constant';
import {isLowPixelDensityDevice} from '../../utils/responsive_util';
import pkg from '../../../package';

const AppUpdateBottomSheetComponent = (props) => {
  const {t} = useTranslation();
  const appTheme = useSelector(state => state.appTheme.value);
  const [version, setVersion] = useState(pkg.version);

  useEffect(() => {
    new SpInAppUpdates().checkNeedsUpdate().then(result => {
      setVersion(result.storeVersion);
    })
  }, []);

  const renderIcon = () => {
    return <View style={styles.infoIcon}>
              <Icon name="exclamation" size={18} color={color.secondaryColor} />
           </View>
  }

  const renderContent = () => {
    return <React.Fragment>
              <Text style={styles.description}>
                {t('updateDescription', {version: version})}
              </Text>
              <BigButtonComponent
                label={t('updateNow')}
                uuid='update-now-button'
                style={{marginTop: 16}}
                audio={null}
                buttonColor={appTheme.primary_color ?? color.primaryColor}
                textColor="white"
                iconPrimaryColor="white"
                onPress={() => {
                  Linking.openURL('https://apps.apple.com/kh/app/youth-health-app/id6444719049').catch((err) =>
                    console.error('An error occurred while trying to open the URL:', err)
                  );
                }}
                hideAudio={true}
              />
           </React.Fragment>
  }

  return (
    <BottomSheetModalMainComponent
      title={t('updateAvailable')}
      titleStyle={styles.title}
      titleContainerStyle={styles.titleContainer}
      titleIcon={renderIcon()}
      containerStyle={{height: hp(appUpdateContentHeight)}}
      scrollViewStyle={{paddingVertical: 0}}
    >
      {renderContent()}
    </BottomSheetModalMainComponent>
  );
}

const styles = StyleSheet.create({
  infoIcon: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.secondaryColor,
    borderRadius: 40,
    justifyContent: 'center',
    marginTop: -2,
    marginRight: 16,
    height: 38,
    width: 38
  },
  description: {
    fontSize: Platform.OS == 'ios' ? largeFontSize() : largeFontSize() + 0.5,
    lineHeight: 30
  },
  titleContainer: {
    marginBottom: isLowPixelDensityDevice() ? 8 : 2
  },
  title: {
    fontSize: bottomSheetTitleFontSize,
    flex: 1,
    marginBottom: 8,
    marginTop: 4
  }
});

export default AppUpdateBottomSheetComponent;