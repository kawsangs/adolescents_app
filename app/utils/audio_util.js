const audioUtil = (() => {
  return {
    getFormattedPlaySeconds,
    getReverseSeconds,
  }

  function getFormattedPlaySeconds(seconds) {
    return new Date(Math.round(seconds) * 1000).toISOString().substr(14, 5);
  }

  function getReverseSeconds(playSeconds, duration) {
    if (playSeconds) {
      const reverseSecond = duration - playSeconds;
      return getFormattedPlaySeconds(reverseSecond);
    }
    return '00:00';
  }
})();

export default audioUtil;