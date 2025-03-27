import {StyleSheet} from 'react-native';
import color from '../../../themes/color';
import {largeFontSize} from '../../../utils/font_size_util';
import {isLowPixelDensityDevice} from '../../../utils/responsive_util';

const loginSelectionViewStyles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: isLowPixelDensityDevice() ? 90 : 100,
    height: isLowPixelDensityDevice() ? 110 : 130,
  },
  title: {
    color: color.whiteColor,
    fontSize: 26,
    lineHeight: 36,
    marginTop: 15,
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