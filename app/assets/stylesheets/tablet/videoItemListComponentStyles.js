import {StyleSheet, Platform} from 'react-native';
import {xLargeFontSize, mediumFontSize} from '../../../utils/font_size_util';
import color from '../../../themes/color';

const videoItemListComponentStyles = StyleSheet.create({
  labelContainer: {
    paddingHorizontal: 8,
    ...Platform.select({
      ios: {
        paddingBottom: 14,
        paddingTop: 10
      },
      android: {
        paddingVertical: 10
      }
    })
  },
  title: {
    fontSize: xLargeFontSize(),
    lineHeight: 28,
    marginBottom: Platform.OS == 'ios' ? 6 : 4,
  },
  author: {
    color: color.grayColor,
    fontSize: mediumFontSize(),
    paddingTop: 0,
  }
});

export default videoItemListComponentStyles