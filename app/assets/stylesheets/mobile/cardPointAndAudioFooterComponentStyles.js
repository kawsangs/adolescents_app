import { StyleSheet } from 'react-native';
import color from '../../../themes/color';
import {FontFamily} from '../../../themes/font';
import { mediumFontSize } from '../../../utils/font_size_util';

const cardPointAndAudioFooterComponentStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 30,
  },
  label: {
    color: color.blackColor,
    flex: 1,
    fontSize: mediumFontSize(),
    fontFamily: FontFamily.regular,
  },
});

export default cardPointAndAudioFooterComponentStyles;