import {StyleSheet, Platform} from 'react-native';
import color from '../../../themes/color';
import {itemFontSize, bottomSheetTitleFontSize} from '../../../constants/bottom_sheet_picker_constant';
import {isLowPixelDensityDevice} from '../../../utils/responsive_util';
import {largeFontSize} from '../../../utils/font_size_util';

const policyConfirmationModalComponentStyles = StyleSheet.create({
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
  instruction: {
    fontSize: itemFontSize,
    lineHeight: 30
  },
  titleContainer: {
    marginBottom: isLowPixelDensityDevice() ? 8 : 2
  },
  title: {
    fontSize: bottomSheetTitleFontSize,
    flex: 1,
    marginBottom: 8,
    marginTop: isLowPixelDensityDevice() ? 4 : 6
  },
  titleAudioBtn: {
    height: 48,
    marginTop: -6
  },
  redNotice: {
    color: color.requiredColor,
    fontSize: Platform.OS == 'ios' ? largeFontSize() : largeFontSize() + 0.5,
    lineHeight: 22,
    marginTop: 16,
    marginBottom: -8,
    textAlign: "center"
  }
})

export default policyConfirmationModalComponentStyles