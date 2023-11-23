import RNFS from 'react-native-fs';
import CategoryApi from '../api/categoryApi';
import Category from '../models/Category';
import DownloadedFile from '../models/DownloadedFile';
import fileService from './file_service';
import fileUtil from '../utils/file_util';
import imageSources from '../constants/image_source_constant';
import audioSources from '../constants/audio_source_constant';

const categorySyncService = (() => {
  return {
    syncByParentCategory,
  }

  function syncByParentCategory(parentCateId, successCallback, failureCallback) {
    new CategoryApi().load(parentCateId, (res) => {
      if (res.children.length > 0) {
        Category.deleteSubCategoriesByParent(parentCateId);
        _handleSaveCategories(res.children, successCallback);
      }
      else {
        Category.deleteSubCategoriesByParent(parentCateId);
        !!successCallback && successCallback();
      }
    }, (error) => {
      !!failureCallback && failureCallback();
    });
  }

  // private method
  function _handleSaveCategories(categories, successCallback) {
    categories.map(category => {
      Category.create(category);
      Category.deleteSubCategoriesByParent(category.id);
      _handleSaveCategories(category.children);
      _handleSaveFiles(category);
    });
    !!successCallback && successCallback();
  }

  async function _handleSaveFiles(category) {
    const imageFile = !!category.image_url ? `${RNFS.DocumentDirectoryPath}/${fileUtil.getFilenameFromUrl(category.image_url)}` : null;
    const audioFile = !!category.audio_url ? `${RNFS.DocumentDirectoryPath}/${fileUtil.getFilenameFromUrl(category.audio_url)}` : null;

    // Check if the image name is not downloaded and is not existed in the offline image then start to download the image
    if (!!imageFile && !await RNFS.exists(imageFile) && !imageSources.hasOwnProperty(fileUtil.getFilenameFromUrl(category.image_url)))
      fileService.download(category.image_url, (filename, isNewFile) => !!isNewFile && DownloadedFile.create({name: fileUtil.getFilenameFromUrl(filename), type: 'image'}));

    if (!!audioFile && !await RNFS.exists(audioFile) && !audioSources.hasOwnProperty(fileUtil.getFilenameFromUrl(category.audio_url)))
      fileService.download(category.audio_url, (filename, isNewFile) => !!isNewFile && DownloadedFile.create({name: fileUtil.getFilenameFromUrl(filename), type: 'audio'}));
  }
})();

export default categorySyncService;