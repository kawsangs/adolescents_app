export default class EqualComparator {
  static compare = (answer, validationValue) => {
    return eval(`'${answer}' == '${validationValue}'`);
  }
}