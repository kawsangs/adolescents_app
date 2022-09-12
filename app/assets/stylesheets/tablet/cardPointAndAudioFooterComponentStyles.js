import { StyleSheet } from 'react-native';
import color from '../../../themes/color';
import { mediumFontSize } from '../../../utils/font_size_util';

const cardPointAndAudioFooterComponentStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    color: color.blackColor,
    flex: 1,
    fontSize: mediumFontSize(),
  },
});

export default cardPointAndAudioFooterComponentStyles;