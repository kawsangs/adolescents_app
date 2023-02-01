import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import color from '../../../themes/color';
import {cardBorderRadius, cardElevation} from '../../../constants/component_constant';
import { XHDPIRatio } from '../../../constants/screen_size_constant';
import {xLargeFontSize} from '../../../utils/font_size_util';
import componentUtil from '../../../utils/component_util';


const devicePixelRatio = Math.round(PixelRatio.roundToNearestPixel(PixelRatio.get()));
const screenWidth = Dimensions.get('screen').width;
const itemMargin = devicePixelRatio <= XHDPIRatio ? 20 : 24; // the margin between each item
const totalMargin = (32 * 2) + (itemMargin * 3); // total margin of each item + horizontal margin of the screen (32dp * 2)
const genderWidth = (screenWidth - totalMargin) / 4;

const genderSelectionButtonComponentStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    minHeight: 114,
    width: genderWidth,
    elevation: cardElevation,
  },
  iconContainer: {
    alignItems: 'center',
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
    fontSize: xLargeFontSize(),
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
    borderRadius: 0,
    borderBottomRightRadius: cardBorderRadius,
    borderBottomLeftRadius: cardBorderRadius,
    width: '100%'
  }
});

export default genderSelectionButtonComponentStyles;