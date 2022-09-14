const defaultItemSize = 48;

const componentUtil = (() => {
  return {
    pressableItemSize,
    mediumPressableItemSize,
  }

  function pressableItemSize(padding = 0) {
    return defaultItemSize + padding;
  }

  function mediumPressableItemSize() {
    return pressableItemSize(8);
  }
})();

export default componentUtil;