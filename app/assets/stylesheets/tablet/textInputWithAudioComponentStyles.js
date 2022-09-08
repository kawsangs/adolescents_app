import {StyleSheet} from 'react-native';
import {cardBorderRadius} from '../../../constants/component_constant';
import componentUtil from '../../../utils/component_util';
import {smallFontSize} from '../../../utils/font_size_util';

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
    fontSize: smallFontSize(),
    height: componentUtil.mediumPressableItemSize(),
    paddingLeft: 16,
    paddingRight: componentUtil.mediumPressableItemSize(),
  }
});

export default textInputWithAudioComponentStyles;