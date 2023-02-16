import {StyleSheet, Platform} from 'react-native';
import color from '../../../themes/color';
import {itemFontSize, bottomSheetTitleFontSize} from '../../../constants/bottom_sheet_picker_constant';

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
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...Platform.select({
      ios: {
        marginTop: 8,
        marginBottom: 4
      },
      andriod: {
        marginVertical: 4,
      }
    })
  },
  checkboxLabel: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: itemFontSize,
    lineHeight: 30,
    marginTop: Platform.OS == 'ios' ? 8 : 10
  },
  title: {
    fontSize: bottomSheetTitleFontSize,
    flex: 1,
    marginBottom: 8,
    marginTop: 6
  },
  titleAudioBtn: {
    height: 48,
    marginTop: -6,
    marginRight: -6
  }
})

export default policyConfirmationModalComponentStyles