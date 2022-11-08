import {StyleSheet} from 'react-native';
import color from '../../../themes/color';
import {cardTitleFontSize} from '../../../constants/component_constant';
import componentUtil from '../../../utils/component_util';
import {isLowPixelDensityDevice} from '../../../utils/responsive_util';

const tiltedCardComponentStyles = StyleSheet.create({
  container: {
    maxHeight: 188,
    width: componentUtil.getGridCardWidth(),
  },
  tiltedView: {
    backgroundColor: color.whiteColor,
    height: 40,
    width: componentUtil.getGridCardWidth(),
    borderTopRightRadius: 15,
    borderTopLeftRadius: 11,
    borderBottomRightRadius: 26,
    transform: [{rotate: "-12deg"}],
    position: 'absolute',
    right: -2.6,
    top: isLowPixelDensityDevice() ? -5.5 : -8,
  },
  secondTiltedView: {
    backgroundColor: color.whiteColor,
    borderTopRightRadius: 5,
    height: 40,
    width: 40,
    position: 'absolute',
    right: 0,
    top: -9,
  },
  backgroundContainer: {
    height: '100%',
    paddingTop: 10,
  },
  infoContainer: {
    backgroundColor: color.whiteColor,
    borderRadius: 10,
    borderTopRightRadius: 0,
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontSize: cardTitleFontSize,
    flex: 1,
    paddingHorizontal: 8,
  },
  footer: {
    flex: 3,
    paddingTop: 8
  }
});

export default tiltedCardComponentStyles;