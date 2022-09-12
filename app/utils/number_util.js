import {numbers} from '../db/json/number';

const numberUtil = (() => {
  return {
    translated
  }

  function translated(value, language) {
    const string = value.toString();
    let result = '';

    for (let i = 0; i < string.length; i++) {
      const text = string[i];
      result += isNaN(parseInt(text)) ? text : numbers[text][language];
    }

    return result;
  }
})();

export default numberUtil;