import {StyleSheet, Platform} from 'react-native';
import {screenHorizontalPadding, cardBorderRadius} from '../../../constants/component_constant';
import color from '../../../themes/color';
import {largeFontSize, mediumFontSize} from '../../../utils/font_size_util';

const backgroundColor = '#f4f1f9';

const facilitySearchListComponentStyles = StyleSheet.create({
  container: {
    borderRadius: cardBorderRadius,
    backgroundColor: backgroundColor,
    elevation: 2,
    marginRight: screenHorizontalPadding,
    marginTop: 16,
  },
  item: {
    backgroundColor: color.whiteColor,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: backgroundColor,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        minHeight: 68,
        paddingBottom: 4
      },
      android: {
        minHeight: 64,
      }
    })
  },
  clinicName: {
    fontSize: largeFontSize(),
    lineHeight: Platform.OS == 'ios' ? 30 : 25
  },
  serviceLabel: {
    color: '#b5b5b5',
    fontSize: mediumFontSize(),
  },
  listHeader: {
    backgroundColor: backgroundColor,
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius,
    height: 40,
    justifyContent: 'center',
  },
  listFooter: {
    backgroundColor: backgroundColor,
    borderBottomLeftRadius: cardBorderRadius,
    borderBottomRightRadius: cardBorderRadius,
    height: 23,
  }
});

export default facilitySearchListComponentStyles;