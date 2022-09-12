import { StyleSheet } from 'react-native';
import color from '../../../themes/color';
import { smallFontSize } from '../../../utils/font_size_util';
import {cardTitleFontSize} from '../../../constants/component_constant';

const horizontalCardInfoComponentStyles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    paddingLeft: 8,
    paddingTop: 8,
  },
  titleContainer: {
    flex: 1,
    paddingRight: 8,
  },
  subtitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: cardTitleFontSize,
    flex: 1
  },
  subtitle: {
    color: color.blackColor,
    flex: 1,
    fontSize: smallFontSize(),
  },
});

export default horizontalCardInfoComponentStyles;