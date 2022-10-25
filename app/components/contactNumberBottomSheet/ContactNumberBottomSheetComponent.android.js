import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import DashedLineComponent from '../shared/DashedLineComponent';
import ContactNumberBottomSheetItemComponent from './ContactNumberBottomSheetItemComponent';
import color from '../../themes/color';
import { screenHorizontalPadding } from '../../constants/component_constant';
import { contactNumbersContentHeight } from '../../constants/modal_constant';
import {xLargeFontSize} from '../../utils/font_size_util';

const ContactNumberBottomSheetComponent = (props) => {
  const {t} = useTranslation();
  const renderTitle = () => {
    return <View>
              <BoldLabelComponent label={t('contactNumber')} style={styles.modalTitle} />
              <DashedLineComponent/>
           </View>
  }

  const renderListItem = () => {
    return props.numbers.map((number, index) => {
      return <ContactNumberBottomSheetItemComponent key={`contact-number-${index}`} number={number} />
    });
  }

  const renderList = () => {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        { renderListItem() }
      </ScrollView>
    )
  }

  return (
    <View style={{height: hp(contactNumbersContentHeight), backgroundColor: color.whiteColor}}>
      {renderTitle()}
      {renderList()}
    </View>
  )
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingTop: 10,
  },
  modalTitle: {
    fontSize: xLargeFontSize(),
    marginBottom: 16,
    paddingHorizontal: screenHorizontalPadding,
  }
});

export default ContactNumberBottomSheetComponent;