const stringUtil = (() => {
  return {
    isEmpty,
  }

  function isEmpty(text) {
    return !(/\S/.test(text));
  }
})();

export default stringUtil;