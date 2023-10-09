import Moment from 'moment';
import translationHelper from './translation_helper';

const dateTimeHelper = (() => {
  return {
    getReadableTime,
    getTranslatedDate,
  }

  function getReadableTime(hour, translation) {
    const time = Moment.utc(hour * 3600 * 1000).format("hh:mm a");
    return `${translationHelper.translateNumber(time.substring(0, 5), translation)} ${translation(time.substring(6, 8))}`;
  }

  function getTranslatedDate(date, translation) {
    const day = Moment(date).format('DD');
    let month = parseInt(Moment(date).format('M')) - 1;
    const year = Moment(date).format('YYYY');
    return `${translationHelper.translateNumber(day, translation)} ${translation(`month${month}`)} ${translationHelper.translateNumber(year, translation)}`;
  }
})();

export default dateTimeHelper;