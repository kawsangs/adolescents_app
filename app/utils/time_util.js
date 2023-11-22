import Moment from 'moment';

const timeUtil = (() => {
  return {
    getTimeFromDuration,
    getTimeFromMilliseconds,
  }

  function getTimeFromDuration(duration) {
    let date = new Date(null);
    date.setSeconds(duration);
    return date.toISOString().substr(11, 8);
  }

  function getTimeFromMilliseconds(milliseconds) {
    return Moment(milliseconds).format('LTS');
  }
})();

export default timeUtil;