import { StyleSheet, Platform } from 'react-native';
import color from '../../../themes/color';
import { smallFontSize } from '../../../utils/font_size_util';
import {cardTitleFontSize} from '../../../constants/component_constant';
import {getAndroidTabletStyle} from '../../../utils/responsive_util';

const horizontalCardInfoComponentStyles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    paddingLeft: 8,
    ...Platform.select({
      ios: {
        paddingTop: 16
      },
      android: {
        paddingTop: getAndroidTabletStyle(8, 16)
      }
    })
  },
  titleContainer: {
    flex: 1,
    paddingRight: 12
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