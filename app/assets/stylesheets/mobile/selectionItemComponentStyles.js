import {StyleSheet} from 'react-native';
import {FontFamily} from '../../../themes/font';
import {normalFontSize} from '../../../utils/font_size_util';
import componentUtil from '../../../utils/component_util';

const selectionItemComponentStyles = StyleSheet.create({
  selectionItem: {
    height: componentUtil.mediumPressableItemSize(),
    paddingLeft: 8
  },
  label: {
    fontSize: normalFontSize(),
    fontFamily: FontFamily.body,
    letterSpacing: -1,
    paddingLeft: 16,
    textAlign: 'left',
  },
  audioBtn: {
    borderWidth: 0,
    borderRadius: 0,
    height: componentUtil.mediumPressableItemSize(),
    width: componentUtil.mediumPressableItemSize()
  }
});

export default selectionItemComponentStyles;