import {StyleSheet} from 'react-native';
import color from '../../../themes/color';
import {bigFontSize} from '../../../utils/font_size_util';

const loginSelectionViewStyles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 80,
    height: 98,
  },
  title: {
    color: color.whiteColor,
    fontSize: 20,
    marginTop: 16,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
    paddingBottom: 2
  },
  label: {
    color: color.whiteColor,
    marginTop: 78,
    textAlign: 'center',
    fontSize: bigFontSize()
  }
});

export default loginSelectionViewStyles;