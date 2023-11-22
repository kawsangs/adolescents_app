export default class MatchAnyComparator {
  static compare(answer, validationValue) {
    if (!answer) return false;

    let query = '';
    const answers = answer.split(',');
    for (let i = 0; i < answers.length; i++) {
      const index = validationValue.indexOf(answers[i]);
      query = !!answers[i] ? `${index > -1 ? 'true' : 'false'}` : 'false';
      if (index > -1)
        break;
    }
    return eval(query);
  }
 }