import {StyleSheet, Platform} from 'react-native';
import {isLowPixelDensityDevice} from '../../../utils/responsive_util';
import componentUtil from '../../../utils/component_util';
import {cardBorderRadius, descriptionFontSize} from '../../../constants/component_constant';

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
    fontSize: descriptionFontSize,
    lineHeight: 26,
    paddingTop: 10
  },
  btnContainer: {
    position: 'absolute',
    top: -25,
    zIndex: 10,
  },
  btn: {
    height: componentUtil.pressableItemSize(),
    width: componentUtil.pressableItemSize(),
  },
});

export default topicListCardComponentStyles;