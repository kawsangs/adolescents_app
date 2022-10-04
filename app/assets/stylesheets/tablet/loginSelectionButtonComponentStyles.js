import {StyleSheet} from 'react-native';
import color from '../../../themes/color';
import componentUtil from '../../../utils/component_util';
import {xxLargeFontSize} from '../../../utils/font_size_util';

const borderRadius = 25;

const loginSelectionButtonComponentStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    elevation: 4,
    backgroundColor: color.whiteColor,
    borderRadius: borderRadius,
    flexDirection: 'row',
    height: componentUtil.mediumPressableItemSize(),
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
    fontSize: 24
  },
  label: {
    color: color.primaryColor,
    flex: 1,
    fontSize: xxLargeFontSize(),
    paddingLeft: 24,
  },
  audioBtn: {
    borderWidth: 0,
    elevation: 0,
    width: componentUtil.pressableItemSize(10)
  }
});

export default loginSelectionButtonComponentStyles;