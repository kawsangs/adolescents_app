import {StyleSheet} from 'react-native';
import color from '../../../themes/color';
import {cardBorderRadius} from '../../../constants/component_constant';
import componentUtil from '../../../utils/component_util';
import {mediumFontSize, largeFontSize} from '../../../utils/font_size_util';

const textInputWithAudioComponentStyles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: cardBorderRadius,
    height: componentUtil.mediumPressableItemSize(),
    justifyContent: 'center',
    marginTop: 10,
  },
  input: {
    borderWidth: 0,
    borderRadius: cardBorderRadius,
    color: color.blackColor,
    fontSize: largeFontSize(),
    height: componentUtil.mediumPressableItemSize(),
    paddingLeft: 16,
    paddingRight: componentUtil.mediumPressableItemSize(),
  },
  title: {
    color: color.whiteColor,
    fontSize: largeFontSize(),
  }
});

export default textInputWithAudioComponentStyles;