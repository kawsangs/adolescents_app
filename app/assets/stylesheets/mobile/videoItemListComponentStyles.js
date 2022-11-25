import {StyleSheet, Platform} from 'react-native';
import {isLowPixelDensityDevice} from '../../../utils/responsive_util';
import {xLargeFontSize, mediumFontSize} from '../../../utils/font_size_util';
import color from '../../../themes/color';

const videoItemListComponentStyles = StyleSheet.create({
  labelContainer: {
    paddingHorizontal: 8,
    ...Platform.select({
      ios: {
        paddingBottom: 10,
        paddingTop: isLowPixelDensityDevice() ? 4 : 8,
      },
      android: {
        paddingBottom: isLowPixelDensityDevice() ? 8 : 10,
        paddingTop: isLowPixelDensityDevice() ? 6 : 8,
      }
    })
  },
  title: {
    fontSize: xLargeFontSize(),
    lineHeight: 24,
    marginBottom: 4,
  },
  author: {
    color: color.grayColor,
    fontSize: mediumFontSize(),
    paddingTop: 0,
  }
});

export default videoItemListComponentStyles