import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderButtonComponent from '../shared/navigationHeaders/NavigationHeaderButtonComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import ThemeSampleComponent from './ThemeSampleComponent';
import color from '../../themes/color';
import themeService from '../../services/theme_service';
import {screenHorizontalPadding} from '../../constants/component_constant';
import { getStyleOfDevice } from '../../utils/responsive_util';

const ChangeThemeInfoModalComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  const [disabled, setDisabled] = useState(false);

  const applyTheme = () => {
    setDisabled(true);
    themeService.downloadThemeImages(props.theme, () => {
      props.applyTheme();
      setDisabled(false);
    });
  }

  return (
    <Portal>
      <Modal
        visible={props.visible}
        contentContainerStyle={styles.container}
        style={{ marginTop: 0, marginBottom: 0 }}
      >
        <NavigationHeaderComponent
          headerStyle={{position: 'absolute', backgroundColor: 'transparent', width: '100%', marginTop: getStyleOfDevice(28, 56)}}
          rightButton={
            <NavigationHeaderButtonComponent onPress={() => props.onDismiss()}
              icon={<IonIcon name="close" size={24} color={appTheme.primary_color ?? color.primaryColor} />}
            />
          }
        />

        <View style={{paddingHorizontal: screenHorizontalPadding, flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 1}}>
            <ThemeSampleComponent theme={props.theme} />
          </View>
          <View>
            <BoldLabelComponent
              label="បង្ហាញអារម្មណ៍តាមរយៈផ្ទៃអេក្រង់"
              style={{ fontSize: 36, marginBottom: 20, lineHeight: 56}}
            />
            <Text style={{fontSize: 20, color: 'black', lineHeight: 32}}>
              ជាមួយផ្ទៃអេក្រង់ច្រើនជម្រើស អ្នកអាចផ្លាស់ប្ដូរអារម្មណ៍លើ កម្មវិធីសុខភាពយុវជន របស់អ្នក ដោយជ្រើសរើសផ្ទៃអេក្រង់ណាមួយដែលអ្នកស្រឡាញ់។
            </Text>
            <BigButtonComponent
              label='សាកល្បងឥឡូវ'
              uuid='try-now-button'
              style={{marginBottom: 16, marginTop: 28}}
              audio={null}
              buttonColor={appTheme.primary_color ?? color.primaryColor}
              textColor={appTheme.primary_text_color ?? "white"}
              iconPrimaryColor={appTheme.primary_text_color ?? "white"}
              onPress={applyTheme}
              disabled={disabled}
              isLoading={disabled}
            />
          </View>
        </View>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    paddingBottom: 16,
  },
});

export default ChangeThemeInfoModalComponent;