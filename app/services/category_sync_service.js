import RNFS from 'react-native-fs';
import CategoryApi from '../api/categoryApi';
import apiService from './api_service';
import categoryHelper from '../helpers/category_helper';
import Category from '../models/Category';
import DownloadedFile from '../models/DownloadedFile';
import fileDownloadService from './file_download_service';
import fileUtil from '../utils/file_util';
import imageSources from '../constants/image_source_constant';
import audioSources from '../constants/audio_source_constant';

const itemsPerPage = 20;

const categorySyncService = (() => {
  return {
    syncAll
  }

  function syncAll(successCallback, failureCallback) {
    _syncAndRemoveByPage(1, 1, successCallback, failureCallback);
  }

  // private method
  async function _syncAndRemoveByPage(page, totalPage, successCallback, failureCallback, prevCategories = []) {
    if(page > totalPage) {
      Category.deleteAll();
      _handleSaveCategory(prevCategories)
      !!successCallback && successCallback()
      return;
    }

    const response = await new CategoryApi().load(page);
    apiService.handleApiResponse(response, (res) => {
      const allPage = Math.ceil(res.pagy.count / itemsPerPage)
      _syncAndRemoveByPage(page+1, allPage, successCallback, failureCallback, [...prevCategories, ...res.categories]);
    }, (error) => !!failureCallback && failureCallback())
  }

  function _handleSaveCategory(categories) {
    categories.map(category => {
      _saveOrUpdate(category);

      category.children.map(subCategory => {
        _saveOrUpdate(subCategory);
      })
    })
  }

  function _saveOrUpdate(category) {
    const existedCate = Category.findById(category.id)
    // Save new category
    if (!existedCate) {
      let { children, content_sources, lft, rgt, ...data } = category;
      Category.create({...data, sources: categoryHelper.getFormattedSources(category.content_sources)})
      const savedCate = Category.findById(category.id);
      _handleSaveFiles(category, savedCate.uuid);
      return
    }

    // Update the category
    let { children, content_sources, lft, rgt, id, ...data } = category;
    Category.update(existedCate.uuid, {...data, sources: categoryHelper.getFormattedSources(category.content_sources)});
    _handleSaveFiles(category, existedCate.uuid);
  }

  async function _handleSaveFiles(category, categoryUuid) {
    const imageFile = !!category.image_url ? `${RNFS.DocumentDirectoryPath}/${fileUtil.getFilenameFromUrl(category.image_url)}` : null;
    const audioFile = !!category.audio_url ? `${RNFS.DocumentDirectoryPath}/${fileUtil.getFilenameFromUrl(category.audio_url)}` : null;

    // Check if the image name is not downloaded and is not existed in the offline image then start to download the image
    if (!!imageFile && !await RNFS.exists(imageFile) && !imageSources.hasOwnProperty(fileUtil.getFilenameFromUrl(category.image_url)))
      fileDownloadService.download(category.image_url, (filename, isNewFile) => !!isNewFile && DownloadedFile.create({name: fileUtil.getFilenameFromUrl(filename), type: 'image'}));

    if (!!audioFile && !await RNFS.exists(audioFile) && !audioSources.hasOwnProperty(fileUtil.getFilenameFromUrl(category.audio_url)))
      fileDownloadService.download(category.audio_url, (filename, isNewFile) => !!isNewFile && DownloadedFile.create({name: fileUtil.getFilenameFromUrl(filename), type: 'audio'}));
  }
})();

export default categorySyncService;