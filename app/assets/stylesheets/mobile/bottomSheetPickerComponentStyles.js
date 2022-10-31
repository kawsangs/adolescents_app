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
    height: componentUtil.mediumPressableItemSize(),
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
  chooseLabel: {
    paddingRight: 12,
    textTransform: 'uppercase',
  },
  itemContainer: {
    flexDirection: 'row',
    height: componentUtil.mediumPressableItemSize(),
    alignItems: 'center',
  },
  deleteButton: {
    width: componentUtil.mediumPressableItemSize(), 
    height: componentUtil.mediumPressableItemSize(),
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default BottomSheetPickerComponentStyles;