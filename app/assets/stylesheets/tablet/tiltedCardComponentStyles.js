import {StyleSheet} from 'react-native';
import color from '../../../themes/color';
import {cardTitleFontSize} from '../../../constants/component_constant';
import componentUtil from '../../../utils/component_util';

const tiltedCardComponentStyles = StyleSheet.create({
  container: {
    maxHeight: 188,
    width: componentUtil.getGridCardWidth(),
  },
  tiltedView: {
    backgroundColor: color.whiteColor,
    height: 60,
    width: componentUtil.getGridCardWidth() + 2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 14,
    borderBottomRightRadius: 42,
    transform: [{rotate: "-11deg"}],
    position: 'absolute',
    top: -24,
    borderColor: 'transparent',
    right: -3.5
  },
  secondTiltedView: {
    backgroundColor: color.whiteColor,
    height: 40,
    width: 40,
    position: 'absolute',
    right: 0.4,
    top: -24,
  },
  backgroundContainer: {
    backgroundColor: color.whiteColor,
    borderRadius: 10,
    borderTopRightRadius: 0,
    height: '100%',
    paddingTop: 10,
  },
  infoContainer: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontSize: cardTitleFontSize,
    flex: 1,
    lineHeight: 27,
    paddingHorizontal: 8,
  },
  footer: {
    flex: 3,
    paddingTop: 8
  }
});

export default tiltedCardComponentStyles;