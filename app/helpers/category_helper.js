import RNFS from 'react-native-fs';

import Category from '../models/Category';
import Video from '../models/Video';
import Facility from '../models/Facility';
import {offlineHomeCatgories} from '../constants/category_constant';
import {ROW_CARD, TILTED_CARD} from '../constants/card_constant';
import audioSources from '../constants/audio_source_constant';
import imageSources from '../constants/image_source_constant';
import DownloadedFile from '../models/DownloadedFile';
import fileUtil from '../utils/file_util';

const categoryHelper = (() => {
  return {
    isMentalSupport,
    isClinicService,
    isVideo,
    getSubPoint,
    getHomeCategories,
    getFormattedSources,
    getFileByUrl,
    getFacilitiesByTagList,
    getVideosByTagList,
  }

  function isMentalSupport(category) {
    return category.code.includes("mental_support");
  }

  function isClinicService(category) {
    return category.code.includes("clinic_and_examination_service");
  }

  function isVideo(category) {
    return category.code.includes("entertainment");
  }

  function getSubPoint(category) {
    return Category.getSubCategories(category.id).length;
  }

  function getHomeCategories() {
    let categories = [...Category.getParentCategories()];
    // Format the home categories in order to prevent the error message "A non-serializable value was detected in the state" when storing the categories in the redux
    let formattedCates = []; 
    categories.map((category, index) => {
      const data = {
        id: category.id,
        name: category.name,
        code: category.code,
        audio_url: category.audio_url,
        image_url: category.image_url,
        display: index == 0 ? ROW_CARD : TILTED_CARD
      }
      formattedCates.push(data);
    })
    return [...formattedCates, ...offlineHomeCatgories]
  }

  function getFormattedSources(sources) {
    return sources.map(source => JSON.stringify(source));
  }

  function getFileByUrl(url, type) {
    if (!url) return null;

    const filename = fileUtil.getFilenameFromUrl(url);
    const downloadedFile = type == 'image' ? DownloadedFile.findImageByName(filename) : DownloadedFile.findAudioByName(filename);
    const fileSource = type == 'image' ? imageSources[filename] : audioSources[filename];
    return !!downloadedFile ? { uri: `file://${RNFS.DocumentDirectoryPath}/${downloadedFile.name}` } : !!fileSource ? fileSource : null;
  }

  function getFacilitiesByTagList(tagList) {
    return findItemsByTagList(tagList, 'facility');
  }

  function getVideosByTagList(tagList) {
    return findItemsByTagList(tagList, 'video')
  }

  // private method
  function findItemsByTagList(tagList, type) {
    let result = [];
    tagList.split(',').map(tag => {
      const items = type == 'facility' ? Facility.findByTag(tag) : Video.findByTag(tag)
      if (items.length > 0)
        result = [...result, ...items]
    })

    // Filter duplicate item by uuid
    return [...new Set(result.map(item => item.uuid))].map(uuid => {
      return result.find(item => item.uuid === uuid);
    });
  }
})()

export default categoryHelper;