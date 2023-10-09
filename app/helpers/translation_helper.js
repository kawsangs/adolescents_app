const translationHelper = (() => {
  return {
    translateNumber
  }

  function translateNumber(value, translation) {
    const string = value.toString();
    let result = '';

    for (let i = 0; i < string.length; i++) {
      const text = string[i];
      result += isNaN(parseInt(text)) ? text : translation(text);
    }

    return result;
  }
})();

export default translationHelper;