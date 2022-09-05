import {StyleSheet} from 'react-native';
import color from '../../../themes/color';
import componentUtil from '../../../utils/component_util';
import {bigFontSize} from '../../../utils/font_size_util';

const borderRadius = 25;

const loginSelectionButtonComponentStyles = StyleSheet.create({
  container: {
    alignItems: 'center', elevation: 4,
    backgroundColor: color.whiteColor,
    borderRadius: borderRadius,
    flexDirection: 'row',
    height: componentUtil.pressableItemSize(),
    width: '100%'
  },
  leftIconContainer: {
    alignItems: 'center',
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    justifyContent: 'center',
    height: '100%',
    marginLeft: -1,
    width: 56,
  },
  leftIcon: {
    fontSize: 20
  },
  label: {
    color: color.primaryColor,
    flex: 1,
    fontSize: bigFontSize(),
    paddingLeft: 24,
  },
  audioBtn: {
    borderWidth: 0,
    borderRadius: 0,
    width: componentUtil.pressableItemSize(10)
  }
});

export default loginSelectionButtonComponentStyles;