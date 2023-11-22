import SurveyQuestion from '../models/SurveyQuestion';
import fileService from './file_service';

const surveyQuestionService = (() => {
  return {
    downloadAudioCollection
  }

  function downloadAudioCollection(sections, callback) {
    _downloadBySection(0, sections, callback);
  }

  // private method
  function _downloadBySection(index, sections, callback) {
    if (index == sections.length) {
      !!callback && callback();
      return
    }

    _downloadQuestionAudio(0, sections[index].questions, () => {
      _downloadBySection(index + 1, sections, callback)
    });
  }

  function _downloadQuestionAudio(index, questions, callback) {
    if (index == questions.length) {
      !!callback && callback();
      return
    }

    const question = questions[index]
    if (!question.audio_url)
      return _downloadQuestionAudio(index + 1, questions, callback);

    fileService.download(question.audio_url, function(fileUrl) {
      SurveyQuestion.update(question.id, { audio: fileUrl });
      _downloadQuestionAudio(index + 1, questions, callback);
    }, () => {
      !!callback && callback()
    });
  }
})();

export default surveyQuestionService;