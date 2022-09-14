import { StyleSheet } from 'react-native';
import componentUtil from '../../../utils/component_util';
import {largeFontSize} from '../../../utils/font_size_util';
import color from '../../../themes/color';

const introPressableLabelComponentStyles = StyleSheet.create({
  container: {
    width: componentUtil.pressableItemSize(),
    height: componentUtil.pressableItemSize(),
    justifyContent: 'center',
  },
  label: {
    fontSize: largeFontSize(),
    color: color.primaryColor,
    width: '100%',
    textAlign: 'center'
  }
});

export default introPressableLabelComponentStyles;