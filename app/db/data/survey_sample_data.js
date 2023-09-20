export const questions = [
  {
    id: 1,
    code: 'question1',
    name: 'តើការមានស្នេហាក្នុងវ័យសិក្សាមានផលប៉ះបាល់អ្វីខ្លះ?',
    type: 'Questions::SelectOne',
    hint: '',
    display_order: 1,
    audio: null,
    form_id: 1,
    section_id: 'section1',
    required: true,
  },
  {
    id: 2,
    code: 'question2',
    name: 'Survey multi select question 2?',
    type: 'Questions::SelectMultiple',
    hint: 'Hint of the survey question 2',
    display_order: 2,
    audio: null,
    form_id: 1,
    section_id: 'section1',
    required: true,
  },
  {
    id: 3,
    code: 'question3',
    name: 'Survey Text question 3?',
    type: 'Questions::Text',
    hint: 'Hint of the survey question 3',
    display_order: 2,
    audio: null,
    form_id: 1,
    section_id: 'section2',
    required: true,
  },
  {
    id: 4,
    code: 'question4',
    name: 'Survey multi select question 4?',
    type: 'Questions::SelectMultiple',
    hint: 'Hint of the survey question 4',
    display_order: 2,
    audio: null,
    form_id: 1,
    section_id: 'section2',
    required: true,
  },
]

export const form = {
  id: 1,
  code: 'fo_001',
  name: 'ចាប់ផ្តើមដំណើររបស់អ្នក',
  version: null,
  question_count: 4,
  image: null,
  audio: null,
}

export const sections = [
  {
    uuid: 'section1',
    name: 'ផ្នែកទី១',
    form_id: 1,
    display_order: 1
  },
  {
    uuid: 'section2',
    name: 'ផ្នែកទី២',
    form_id: 1,
    display_order: 2
  }
]

export const options = [
  {
    id: 1,
    name: 'Q1: answer 1',
    value: '1.1',
    score: 1,
    question_id: 1,
    question_code: 'question1',
  },
  {
    id: 2,
    name: 'Q1: answer 1',
    value: '1.2',
    score: 1,
    question_id: 1,
    question_code: 'question1',
  },
  {
    id: 3,
    name: 'Q2: answer 1',
    value: '2.1',
    score: 2,
    question_id: 2,
    question_code: 'question2'
  },
  {
    id: 4,
    name: 'Q2: answer 2',
    value: '2.2',
    score: 2,
    question_id: 2,
    question_code: 'question2'
  },
  {
    id: 5,
    name: 'Q2: answer 3',
    value: '2.3',
    score: 2,
    question_id: 2,
    question_code: 'question2'
  },
  {
    id: 6,
    name: 'Q2: answer 4',
    value: '2.4',
    score: 2,
    question_id: 2,
    question_code: 'question2'
  },
  {
    id: 7,
    name: 'Q4: answer 1',
    value: '4.1',
    score: 1,
    question_id: 4,
    question_code: 'question4'
  },
  {
    id: 8,
    name: 'Q4: answer 2',
    value: '4.2',
    score: 2,
    question_id: 4,
    question_code: 'question4'
  },
  {
    id: 9,
    name: 'Q4: answer 3',
    value: '4.3',
    score: 3,
    question_id: 4,
    question_code: 'question4'
  },
  {
    id: 10,
    name: 'Q4: answer 4',
    value: '4.4',
    score: 4,
    question_id: 4,
    question_code: 'question4'
  },
  {
    id: 11,
    name: 'Q4: answer 5',
    value: '4.5',
    score: 5,
    question_id: 4,
    question_code: 'question4'
  },
]


const answers = [
  {
    id: 'answer1',
    question_id: 1,
    question_code: 'question1',
    value: 'answer_value_1',
    score: 0,
    user_uuid: 'user1',
    survey_uuid: 'survey1'
  }
]