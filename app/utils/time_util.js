const timeUtil = (() => {
  return {
    getFormattedMinuteFromSeconds,
  }

  function getFormattedMinuteFromSeconds(seconds) {
    return new Date(Math.round(seconds) * 1000).toISOString().substr(14, 5);
  }
})();

export default timeUtil;