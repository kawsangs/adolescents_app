import {StyleSheet, Dimensions} from 'react-native';
import color from '../../../themes/color';
import {cardBorderRadius, cardElevation} from '../../../constants/component_constant';
import {normalFontSize} from '../../../utils/font_size_util';
import componentUtil from '../../../utils/component_util';

const screenWidth = Dimensions.get('screen').width;
const genderMargin = (32 * 2) + (24 * 3);
const genderWidth = (screenWidth - genderMargin) / 4;

const genderSelectionButtonComponentStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    minHeight: 114,
    width: genderWidth,
    elevation: cardElevation,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: color.secondaryColor,
    borderTopRightRadius: cardBorderRadius,
    borderTopLeftRadius: cardBorderRadius,
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  label: {
    color: color.whiteColor,
    fontSize: normalFontSize(),
    marginTop: 2,
  },
  audioContainer: {
    alignItems: 'center',
    backgroundColor: color.whiteColor,
    borderBottomRightRadius: cardBorderRadius,
    borderBottomLeftRadius: cardBorderRadius,
    flex: 2,
    justifyContent: 'center',
    marginTop: -1,
    maxHeight: componentUtil.pressableItemSize(),
  },
  audioBtn: {
    borderWidth: 0,
    borderRadius: 0,
    borderBottomRightRadius: cardBorderRadius,
    borderBottomLeftRadius: cardBorderRadius,
    width: '100%',
  }
});

export default genderSelectionButtonComponentStyles;