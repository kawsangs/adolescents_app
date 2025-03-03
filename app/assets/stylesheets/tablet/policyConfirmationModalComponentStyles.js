import {StyleSheet, Platform} from 'react-native';
import color from '../../../themes/color';
import {itemFontSize, bottomSheetTitleFontSize} from '../../../constants/bottom_sheet_picker_constant';
import {largeFontSize} from '../../../utils/font_size_util';

const policyConfirmationModalComponentStyles = StyleSheet.create({
  infoIcon: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.secondaryColor,
    borderRadius: 40,
    justifyContent: 'center',
    marginRight: 16,
    height: 38,
    width: 38
  },
  instruction: {
    fontSize: itemFontSize,
    lineHeight: 34
  },
  titleContainer: {
    marginBottom: 12
  },
  title: {
    fontSize: bottomSheetTitleFontSize,
    flex: 1,
    marginBottom: 8,
    marginTop: 6
  },
  titleAudioBtn: {
    height: 48,
    marginTop: -2
  },
  redNotice: {
    color: color.requiredColor,
    fontSize: Platform.OS == 'ios' ? largeFontSize() : largeFontSize() + 0.5,
    lineHeight: 28,
    marginTop: 16,
    marginBottom: -8,
    textAlign: "center"
  }
})

export default policyConfirmationModalComponentStyles