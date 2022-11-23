import {StyleSheet} from 'react-native';
import {xLargeFontSize, mediumFontSize} from '../../../utils/font_size_util';
import color from '../../../themes/color';

const videoItemListComponentStyles = StyleSheet.create({
  labelContainer: {
    paddingLeft: 8,
    paddingBottom: 12,
    paddingTop: 10
  },
  title: {
    fontSize: xLargeFontSize(),
    lineHeight: 28,
    marginBottom: 6,
  },
  author: {
    color: color.grayColor,
    fontSize: mediumFontSize(),
    paddingTop: 0,
  }
});

export default videoItemListComponentStyles