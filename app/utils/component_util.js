const defaultItemSize = 48;

const componentUtil = (() => {
  return {
    pressableItemSize
  }

  function pressableItemSize(padding = 0) {
    return defaultItemSize + padding;
  }
})();

export default componentUtil;