import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderButtonComponent from '../shared/navigationHeaders/NavigationHeaderButtonComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import ChangeThemeInfoSampleComponent from './ChangeThemeInfoSampleComponent';
import color from '../../themes/color';

const ChangeThemeInfoModalComponent = (props) => {
  return (
    <Portal>
      <Modal
        visible={props.visible}
        contentContainerStyle={styles.container}
      >
        <NavigationHeaderComponent
          headerStyle={{backgroundColor: 'white'}}
          rightButton={
            <NavigationHeaderButtonComponent onPress={() => props.onDismiss()}
              icon={<IonIcon name="close" size={24} color={color.primaryColor} />}
            />
          }
        />

        <View style={{paddingHorizontal: 16, flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 1}}>
            <ChangeThemeInfoSampleComponent/>
            <BoldLabelComponent
              label="បង្ហាញអារម្មណ៍តាមរយៈផ្ទៃអេក្រង់"
              style={{ fontSize: 20, marginBottom: 20, lineHeight: 28}}
            />
            <Text style={{fontSize: 18, color: 'black', lineHeight: 30}}>
              ជាមួយផ្ទៃអេក្រង់ច្រើនជម្រើស អ្នកអាចផ្លាស់ប្ដូរអារម្មណ៍លើ កម្មវិធីសុខភាពយុវជន របស់អ្នក ដោយជ្រើសរើសផ្ទៃអេក្រង់ណាមួយដែលអ្នកស្រឡាញ់។
            </Text>
          </View>

          <BigButtonComponent
            label='សាកល្បងឥឡូវ'
            uuid='save-button'
            style={{marginBottom: 16, marginTop: 58}}
            audio={null}
            buttonColor={color.primaryColor}
            textColor="white"
            iconPrimaryColor="white"
            onPress={() => {}}
          />
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
  },
});

export default ChangeThemeInfoModalComponent;