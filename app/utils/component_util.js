import {Dimensions} from 'react-native';
import {screenHorizontalPadding} from '../constants/component_constant';

const defaultItemSize = 48;

const componentUtil = (() => {
  return {
    pressableItemSize,
    mediumPressableItemSize,
    getGridCardWidth,
  }

  function pressableItemSize(padding = 0) {
    return defaultItemSize + padding;
  }

  function mediumPressableItemSize() {
    return pressableItemSize(8);
  }

  function getGridCardWidth() {
    const screenWidth = Dimensions.get('screen').width;
    return ((screenWidth - (screenHorizontalPadding * 2)) / 2) - 8; // 8 is the margin between the card in a row
  }
})();

export default componentUtil;