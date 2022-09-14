import {StyleSheet} from 'react-native';
import color from '../../../themes/color';
import {largeFontSize} from '../../../utils/font_size_util';

const loginSelectionViewStyles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 80,
    height: 98,
  },
  title: {
    color: color.whiteColor,
    fontSize: 24,
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
    fontSize: largeFontSize()
  }
});

export default loginSelectionViewStyles;