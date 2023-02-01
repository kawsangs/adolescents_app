import {StyleSheet} from 'react-native';
import {FontFamily} from '../../../themes/font';
import {xLargeFontSize} from '../../../utils/font_size_util';
import componentUtil from '../../../utils/component_util';

const selectionItemComponentStyles = StyleSheet.create({
  selectionItem: {
    height: componentUtil.tabletPressableItemSize(),
    paddingLeft: 8
  },
  label: {
    fontSize: xLargeFontSize(),
    fontFamily: FontFamily.regular,
    letterSpacing: -1,
    paddingLeft: 16,
    textAlign: 'left',
  },
});

export default selectionItemComponentStyles;