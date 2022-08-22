import { StyleSheet } from 'react-native';
import color from '../../../themes/color';
import { smallFontSize } from '../../../utils/font_size_util';

const horizontalCardInfoComponentStyles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    paddingLeft: 8,
    paddingTop: 8,
  },
  titleContainer: {
    flex: 1,
    paddingRight: 12
  },
  subtitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtitle: {
    color: color.blackColor,
    flex: 1,
    fontSize: smallFontSize(),
  },
});

export default horizontalCardInfoComponentStyles;