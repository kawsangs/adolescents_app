import { StyleSheet } from 'react-native';
import color from '../../../themes/color';
import {descriptionFontSize} from '../../../constants/component_constant';

const cardPointAndAudioFooterComponentStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 3,
    paddingVertical: 2,
  },
  label: {
    color: color.blackColor,
    flex: 1,
    fontSize: descriptionFontSize,
  },
});

export default cardPointAndAudioFooterComponentStyles;