'use strict';

const FrequentlyAskQuestion = {
  name: 'FrequentlyAskQuestion',
  primaryKey: 'id',
  properties: {
    id: 'int',
    question: 'string',
    answer: 'string',
    type: 'string',
    question_audio: 'string?',
    answer_audio: 'string?'
  }
}

export default FrequentlyAskQuestion;