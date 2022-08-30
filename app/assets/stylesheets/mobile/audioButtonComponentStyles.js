import { StyleSheet } from 'react-native';
import componentUtil from '../../../utils/component_util';

const audioButtonComponentStyles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    height: componentUtil.pressableItemSize(),
    justifyContent: 'center',
    width: componentUtil.pressableItemSize(),
  }
});

export default audioButtonComponentStyles;