import Moment from 'moment';
import {timePeriods} from "../constants/date_time_constant";
import translationHelper from './translation_helper';

const dateTimeHelper = (() => {
  return {
    getReadableTime,
  }

  function getReadableTime(hour, language) {
    const time = Moment.utc(hour * 3600 * 1000).format("hh:mm a");
    return `${translationHelper.translateNumber(time.substring(0, 5), language)} ${timePeriods[time.substring(6, 8)][language]}`;
  }
})();

export default dateTimeHelper;