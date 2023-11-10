import {StyleSheet, Platform} from 'react-native';
import {isLowPixelDensityDevice} from '../../../utils/responsive_util';
import {cardBorderRadius, descriptionFontSize} from '../../../constants/component_constant';
import {FontFamily} from '../../../themes/font';
import color from '../../../themes/color';

const topicListCardComponentStyles = StyleSheet.create({
  card: {
    borderRadius: cardBorderRadius,
    ...Platform.select({
      ios: {
        height: isLowPixelDensityDevice() ? 88 : 94,
      },
      android: {
        height: isLowPixelDensityDevice() ? 84 : 94,
      }
    })
  },
  labelContainer: {
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    paddingLeft: 2,
    width: '100%',
    zIndex: -1,
  },
  label: {
    color: color.blackColor,
    fontFamily: FontFamily.regular,
    fontSize: descriptionFontSize,
    lineHeight: 26,
  },
  btnContainer: {
    position: 'absolute',
    top: -25,
    zIndex: 10,
  },
});

export default topicListCardComponentStyles;