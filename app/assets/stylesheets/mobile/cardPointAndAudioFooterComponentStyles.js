import { StyleSheet } from 'react-native';
import color from '../../../themes/color';
import { normalFontSize } from '../../../utils/font_size_util';

const cardPointAndAudioFooterComponentStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    color: color.blackColor,
    flex: 1,
    fontSize: normalFontSize(),
  },
});

export default cardPointAndAudioFooterComponentStyles;