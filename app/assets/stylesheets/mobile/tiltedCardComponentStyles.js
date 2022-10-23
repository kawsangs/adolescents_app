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
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: componentUtil.getGridCardWidth(),
    borderTopWidth: 30,
    borderRadius: 14,
    borderRightColor: "transparent",
    borderTopColor: color.whiteColor,
    borderTopLeftRadius: 0,
    height: 0,
    position: 'absolute',
    transform: [{ rotate: "180deg" }],
    top: -28.2,
    width: 0,
    zIndex: -1
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
    paddingHorizontal: 8,
  },
  footer: {
    flex: 3,
    paddingTop: 8
  }
});

export default tiltedCardComponentStyles;