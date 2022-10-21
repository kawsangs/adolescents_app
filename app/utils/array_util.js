const arrayUtil = (() => {
  return {
    getRangeOfNumber,
  }

  function getRangeOfNumber(start, end) {
    return Array.from(Array.from(Array(Math.ceil((end-start+1)/1)).keys()), x => start+ x*1);
  }
})();

export default arrayUtil;