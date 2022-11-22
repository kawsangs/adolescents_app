import {StyleSheet, Platform} from 'react-native';
import color from '../../../themes/color';
import {cardTitleFontSize} from '../../../constants/component_constant';
import componentUtil from '../../../utils/component_util';

const tiltedCardComponentStyles = StyleSheet.create({
  container: {
    width: componentUtil.getGridCardWidth(),
    borderRadius: 70,
    ...Platform.select({
      ios: {
        maxHeight: 178,
      },
      android: {
        maxHeight: 188,
      }
    })
  },
  tiltedView: {
    backgroundColor: color.whiteColor,
    height: 60,
    width: componentUtil.getGridCardWidth() + 2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 14,
    position: 'absolute',
    borderColor: 'transparent',
    ...Platform.select({
      ios: {
        borderBottomRightRadius: 65.8,
        right: -3,
        top: -23,
        transform: [{rotate: "-8deg"}],
      },
      android: {
        borderBottomRightRadius: 42,
        right: -3.5,
        top: -24,
        transform: [{rotate: "-11deg"}],
      }
    })
  },
  secondTiltedView: {
    backgroundColor: color.whiteColor,
    height: 40,
    width: 40,
    position: 'absolute',
    ...Platform.select({
      ios: {
        right: 0,
        top: -26,
      },
      android: {
        right: 0.4,
        top: -24,
      }
    })
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
    ...Platform.select({
      ios: {
        paddingTop: 8,
      }
    })
  },
  footer: {
    flex: 3,
    paddingTop: 8
  }
});

export default tiltedCardComponentStyles;