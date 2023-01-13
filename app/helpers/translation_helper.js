import {numbers} from '../db/data/number';

const translationHelper = (() => {
  return {
    translateNumber
  }

  function translateNumber(value, language) {
    const string = value.toString();
    let result = '';

    for (let i = 0; i < string.length; i++) {
      const text = string[i];
      result += isNaN(parseInt(text)) ? text : numbers[text][language];
    }

    return result;
  }
})();

export default translationHelper;