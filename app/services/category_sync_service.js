import RNFS from 'react-native-fs';
import CategoryApi from '../api/categoryApi';
import apiService from './api_service';
import categoryHelper from '../helpers/category_helper';
import Category from '../models/Category';
import fileDownloadService from './file_download_service';
import fileUtil from '../utils/file_util';
import imageSources from '../constants/image_source_constant';
import audioSources from '../constants/audio_source_constant';

const categorySyncService = (() => {
  return {
    syncData
  }

  // Todo: create a function to sync all the categoies
  async function syncData(page, successCallback, failureCallback) {
    const response = await new CategoryApi().load(page);
    apiService.handleApiResponse(response, (res) => {
      _handleSaveCategory(res.categories)
      !!successCallback && successCallback()
    }, (error) => !!failureCallback && failureCallback())
  }

  // private method
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
      _handleSaveFiles(category, (imageFilename) => {
        Category.update(savedCate.uuid, { image: imageFilename })
      }, (audioFilename) => {
        Category.update(savedCate.uuid, { audio: audioFilename })
      });
      return
    }

    // Update the category
    let { children, content_sources, lft, rgt, id, ...data } = category;
    Category.update(existedCate.uuid, {...data, sources: categoryHelper.getFormattedSources(category.content_sources)});

    _handleSaveFiles(category, (imageFilename) => {
      Category.update(existedCate.uuid, {...data, image: imageFilename, sources: categoryHelper.getFormattedSources(category.content_sources)});
    }, (audioFilename) => {
      Category.update(existedCate.uuid, {...data, audio: audioFilename, sources: categoryHelper.getFormattedSources(category.content_sources)});
    });
  }

  async function _handleSaveFiles(category, imageCallback, audioCallback) {
    const imageFile = !!category.image_url ? `${RNFS.DocumentDirectoryPath}/${fileUtil.getFilenameFromUrl(category.image_url)}` : null;
    const audioFile = !!category.audio_url ? `${RNFS.DocumentDirectoryPath}/${fileUtil.getFilenameFromUrl(category.audio_url)}` : null;

    if (!!imageFile && !await RNFS.exists(imageFile) && !imageSources.hasOwnProperty(imageFile))
      _handleDownloadFile(category.image_url, (filename) => imageCallback(filename))

    if (!!audioFile && !await RNFS.exists(audioFile) && !audioSources.hasOwnProperty(audioFile))
      _handleDownloadFile(category.audio_url, (filename) => audioCallback(filename))
  }

  function _handleDownloadFile(url, successCallback) {
    fileDownloadService.download(url, (filename, isNewFile) => {
      (!!isNewFile && !!successCallback ) && successCallback(filename)
    })
  }
})();

export default categorySyncService;