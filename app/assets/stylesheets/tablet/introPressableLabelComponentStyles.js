import { StyleSheet } from 'react-native';
import componentUtil from '../../../utils/component_util';
import { bigFontSize } from '../../../utils/font_size_util';
import color from '../../../themes/color';

const introPressableLabelComponentStyles = StyleSheet.create({
  container: {
    width: componentUtil.pressableItemSize(),
    height: componentUtil.pressableItemSize(),
    justifyContent: 'center',
  },
  label: {
    fontSize: bigFontSize(),
    color: color.primaryColor,
    width: '100%',
    textAlign: 'center',
    textTransform: 'capitalize'
  }
});

export default introPressableLabelComponentStyles;