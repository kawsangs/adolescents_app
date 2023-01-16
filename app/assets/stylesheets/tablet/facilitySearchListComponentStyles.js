import {StyleSheet} from 'react-native';
import {screenHorizontalPadding, cardBorderRadius} from '../../../constants/component_constant';
import color from '../../../themes/color';
import {largeFontSize} from '../../../utils/font_size_util';

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
    minHeight: 68,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: backgroundColor,
    justifyContent: 'center',
  },
  clinicName: {
    fontSize: largeFontSize(),
    lineHeight: 22
  },
  serviceBadge: {
    backgroundColor: color.lightGrayColor,
    borderRadius: 4,
    height: 22,
    justifyContent: 'center',
    marginRight: 4,
    marginTop: 3,
    paddingHorizontal: 6,
  },
  serviceLabel: {
    color: '#6b6b6b',
    fontSize: 13
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