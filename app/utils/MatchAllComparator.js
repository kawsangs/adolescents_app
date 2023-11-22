export default class MatchAllComparator {
  static compare(answer, responseValue) {
    if (!answer) return false;

    let query = '';
    const responseValues = responseValue.split(',');
    for (let i = 0; i < responseValues.length; i++) {
      // query += answer.indexOf(responseValues[i]) > -1 ? 'true' : 'false';
      query += !answer ? 'false' : answer.indexOf(responseValues[i]) > -1 ? 'true' : 'false';
      if (i < responseValues.length - 1)
        query += ' && ';
    }
    return eval(query);
  }
}