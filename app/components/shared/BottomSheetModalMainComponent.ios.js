import React from 'react';
import {View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BoldLabelComponent from './BoldLabelComponent';
import DashedLineComponent from './DashedLineComponent';
import color from '../../themes/color';
import { screenHorizontalPadding } from '../../constants/component_constant';
import { defaultPickerContentHeight } from '../../constants/modal_constant';
import {xLargeFontSize} from '../../utils/font_size_util';
import {isLowPixelDensityDevice} from '../../utils/responsive_util';

const BottomSheetModalMainComponent = (props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <View>
        <View style={{height: isLowPixelDensityDevice() ? 48 : 56, paddingTop: 6}}>
          <BoldLabelComponent label={props.title} style={styles.modalTitle} />
        </View>
        <DashedLineComponent/>
      </View>
      <ScrollView contentContainerStyle={[styles.scrollViewContainer, props.scrollViewStyle]}>
        {props.children}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.whiteColor,
    height: hp(defaultPickerContentHeight),
  },
  modalTitle: {
    fontSize: xLargeFontSize(),
    paddingHorizontal: screenHorizontalPadding,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: screenHorizontalPadding,
  },
})

export default BottomSheetModalMainComponent;