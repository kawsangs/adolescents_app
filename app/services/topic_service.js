import RNFS from 'react-native-fs';
import TopicApi from '../api/topicApi';
import apiService from './api_service';
import Topic from '../models/Topic';
import Question from '../models/Question';
import Option from '../models/Option';
import DownloadedFile from '../models/DownloadedFile';
import modelHelper from '../helpers/model_helper';
import fileUtil from '../utils/file_util';
import fileService from './file_service';
import audioSources from '../constants/audio_source_constant';

const itemsPerPage = 20;

const topicService = (() => {
  return {
    syncAll,
    saveTopicCollection
  }

  function syncAll(successCallback, failureCallback) {
    _syncAndRemoveByPage(1, 1, successCallback, failureCallback);
  }

  function saveTopicCollection(topics, isOffline = false) {
    const formattedTopics = [];
    const formattedQuestions = [];
    const formattedOptions = [];

    topics.map(topic => {
      formattedTopics.push({ ...topic, uuid: topic.id, service_uuids: topic.service_ids, question_uuids: modelHelper.getItemUuids(topic.questions) });
      !isOffline && _handleSaveFiles(topic);  // download audio of the topic
      topic.questions.map(question => {
        formattedQuestions.push({...question, uuid: question.id, topic_uuid: question.topic_id, option_uuids: modelHelper.getItemUuids(question.options)});
        !isOffline && _handleSaveFiles(question);  // download audio of the question
        question.options.map(option => {
          formattedOptions.push({...option, uuid: option.id, question_uuid: option.question_id});
        })
      });
    });

    Topic.seedData(formattedTopics);
    Question.seedData(formattedQuestions);
    Option.seedData(formattedOptions);
  }

  // privat method
   async function _syncAndRemoveByPage(page, totalPage, successCallback, failureCallback, prevTopics = []) {
    if(page > totalPage) {
      Topic.deleteAll();
      saveTopicCollection(prevTopics)
      setTimeout(() => {
        !!successCallback && successCallback()
      }, 200);
      return;
    }

    const response = await new TopicApi().load(page);
    apiService.handleApiResponse(response, (res) => {
      const allPage = Math.ceil(res.pagy.count / itemsPerPage)
      _syncAndRemoveByPage(page+1, allPage, successCallback, failureCallback, [...prevTopics, ...res.topics]);
    }, (error) => !!failureCallback && failureCallback())
  }

  async function _handleSaveFiles(item) {
    const audioFile = !!item.audio ? `${RNFS.DocumentDirectoryPath}/${fileUtil.getFilenameFromUrl(item.audio)}` : null;
    if (!!audioFile && !await RNFS.exists(audioFile) && !audioSources.hasOwnProperty(fileUtil.getFilenameFromUrl(item.audio)))
      fileService.download(item.audio, (filename, isNewFile) => !!isNewFile && DownloadedFile.create({name: fileUtil.getFilenameFromUrl(filename), type: 'audio'}));
  }
})();

export default topicService;