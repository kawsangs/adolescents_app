import {StyleSheet} from 'react-native';
import color from '../../../themes/color';
import {screenHorizontalPadding, cardTitleFontSize} from '../../../constants/component_constant';
import componentUtil from '../../../utils/component_util';

const screenWidth = Dimensions.get('screen').width;
const cardWidth = ((screenWidth - (screenHorizontalPadding * 2)) / 2) - 8; // 8 is the margin between the card in a row

const tiltedCardComponentStyles = StyleSheet.create({
  container: {
    maxHeight: 188,
    width: cardWidth,
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
    top: 1.2,
    top: -28.8,
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
    lineHeight: 27
  },
  footer: {
    flex: 3,
    paddingHorizontal: 8,
    paddingTop: 8
  }
});

export default tiltedCardComponentStyles;