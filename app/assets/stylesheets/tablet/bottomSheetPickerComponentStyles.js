import { StyleSheet } from 'react-native';
import color from '../../../themes/color';
import { largeFontSize } from '../../../utils/font_size_util';
import componentUtil from '../../../utils/component_util';
import { cardBorderRadius } from '../../../constants/component_constant';

const BottomSheetPickerComponentStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.whiteColor,
    borderRadius: cardBorderRadius,
    marginTop: 5,
    height: componentUtil.tabletPressableItemSize(),
  },
  titleLabel: {
    color: color.whiteColor,
    fontSize: largeFontSize(),
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  itemTitle: {
    fontSize: largeFontSize(),
  },
  itemContainer: {
    flexDirection: 'row',
    height: componentUtil.tabletPressableItemSize(),
    alignItems: 'center',
  },
});

export default BottomSheetPickerComponentStyles;