import {StyleSheet} from 'react-native';
import {cardBorderRadius, descriptionFontSize} from '../../../constants/component_constant';
import {FontFamily} from '../../../themes/font';
import color from '../../../themes/color';

const topicListCardComponentStyles = StyleSheet.create({
  card: {
    borderRadius: cardBorderRadius,
    backgroundColor: 'white',
    height: 94
  },
  innerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    height: 94
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
  }
});

export default topicListCardComponentStyles;