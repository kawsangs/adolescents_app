const mathUtil = (() => {
  return {
    getIntegerOf
  }

  function getIntegerOf(value) {
    return parseInt(value) || 0;
  }
})();

export default mathUtil;