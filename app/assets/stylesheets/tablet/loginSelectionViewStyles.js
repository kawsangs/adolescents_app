import {StyleSheet, Platform} from 'react-native';
import color from '../../../themes/color';
import {xxLargeFontSize} from '../../../utils/font_size_util';

const loginSelectionViewStyles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        width: 208,
        height: 210,
      },
      android: {
        width: 148,
        height: 150,
      }
    })
  },
  title: {
    color: color.whiteColor,
    marginTop: 16,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
    paddingBottom: 2,
    ...Platform.select({
      ios: {
        fontSize: 46,
        lineHeight: 56,
      },
      android: {
        fontSize: 36,
        lineHeight: 45
      }
    })
  },
  label: {
    color: color.whiteColor,
    marginTop: 78,
    textAlign: 'center',
    fontSize: xxLargeFontSize()
  }
});

export default loginSelectionViewStyles;