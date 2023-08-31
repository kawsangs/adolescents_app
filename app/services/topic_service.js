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

  function saveTopicCollection(topics, isOffline = false, callback) {
    const formattedTopics = [];
    const formattedQuestions = [];
    const formattedOptions = [];
    let audios = [];

    topics.map(topic => {
      formattedTopics.push({ ...topic, uuid: topic.id, service_uuids: topic.service_ids, question_uuids: modelHelper.getItemUuids(topic.questions) });
      audios.push(topic.audio);
      topic.questions.map(question => {
        formattedQuestions.push({...question, uuid: question.id, topic_uuid: question.topic_id, option_uuids: modelHelper.getItemUuids(question.options)});
        audios.push(question.audio);
        question.options.map(option => {
          formattedOptions.push({...option, uuid: option.id, question_uuid: option.question_id});
        })
      });
    });

    Topic.seedData(formattedTopics);
    Question.seedData(formattedQuestions);
    Option.seedData(formattedOptions);

    if (isOffline) return;

    audios.map((audio, index) => {
      _handleSaveFiles(audio, index, (itemIndex) => {
        if (itemIndex == audios.length - 1)
          !!callback && callback();
      })
    })
  }

  // privat method
   async function _syncAndRemoveByPage(page, totalPage, successCallback, failureCallback, prevTopics = []) {
    if(page > totalPage) {
      Topic.deleteAll();
      saveTopicCollection(prevTopics, false, successCallback)
      return;
    }

    const response = await new TopicApi().load(page);
    apiService.handleApiResponse(response, (res) => {
      const allPage = Math.ceil(res.pagy.count / itemsPerPage)
      _syncAndRemoveByPage(page+1, allPage, successCallback, failureCallback, [...prevTopics, ...res.topics]);
    }, (error) => !!failureCallback && failureCallback())
  }

  async function _handleSaveFiles(audio, index, callback) {
    const audioFile = `${RNFS.DocumentDirectoryPath}/${fileUtil.getFilenameFromUrl(audio)}`;
    if (!await RNFS.exists(audioFile) && !audioSources.hasOwnProperty(fileUtil.getFilenameFromUrl(audio))) {
      fileService.download(audio, (filename, isNewFile) => {
        !!isNewFile && DownloadedFile.create({name: fileUtil.getFilenameFromUrl(filename), type: 'audio'})
        !!callback && callback(index);
      });
    }
    else
      !!callback && callback(index);
  }
})();

export default topicService;