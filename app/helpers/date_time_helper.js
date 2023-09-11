import Moment from 'moment';
import {timePeriods} from "../constants/date_time_constant";
import translationHelper from './translation_helper';

const dateTimeHelper = (() => {
  return {
    getReadableTime,
    getTranslatedDate,
  }

  function getReadableTime(hour, language) {
    const time = Moment.utc(hour * 3600 * 1000).format("hh:mm a");
    return `${translationHelper.translateNumber(time.substring(0, 5), language)} ${timePeriods[time.substring(6, 8)][language]}`;
  }

  function getTranslatedDate(date, language) {
    const months = {
      'km': ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'],
      'en': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };
  
    const day = Moment(date).format('DD');
    let month = parseInt(Moment(date).format('M')) - 1;
    month = months[language][month];
    const year = Moment(date).format('YYYY');

    return `${translationHelper.translateNumber(day, language)} ${month} ${translationHelper.translateNumber(year, language)}`;
  }
})();

export default dateTimeHelper;