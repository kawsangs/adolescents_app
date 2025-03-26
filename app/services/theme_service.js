import RNFS from 'react-native-fs';

import ThemeApi from '../api/themeApi';
import apiService from './api_service';
import Theme from '../models/Theme';
import DownloadedFile from '../models/DownloadedFile';
import fileService from './file_service';
import fileUtil from '../utils/file_util';

const itemsPerPage = 20;

const themeService = (() => {
  return {
    syncData,
    downloadThemeImages
  }

  function syncData(successCallback, failureCallback) {
    _syncByPage(1, 1, successCallback, failureCallback)
  }

  async function _syncByPage(page, totalPage, successCallback, failureCallback) {
    if(page > totalPage) {
      !!successCallback && successCallback();
      return;
    }

    const response = await new ThemeApi().load(page);
    apiService.handleApiResponse(response, (res) => {
      const allPage = Math.ceil(res.pagy.count / itemsPerPage);
      _handleRemoveThemes(res.themes, page);
      _handleSaveThemes(0, res.themes, page, () => {
        _syncByPage(page+1, allPage, successCallback, failureCallback);
      })
    }, (error) => !!failureCallback && failureCallback());
  }

  function _handleRemoveThemes(themes, page) {
    const localThemes = Theme.findAllByPage(page);
    const unmatchThemes = _getUnmatchThemes(themes, localThemes);
    unmatchThemes.forEach(theme => {
      if (!!Theme.findById(theme.id))
        Theme.deleteById(theme.id);
    });
  }

  function _getUnmatchThemes(serverThemes, localThemes) {
    var result = [serverThemes, localThemes].sort((a,b)=> b.length - a.length)
                    .reduce((a,b)=>a.filter(o => !b.some(v => v.id === o.id)));
    return result;
  }

  function _handleSaveThemes(index, themes, page, callback) {
    if (index >= themes.length) {
      callback();
      return;
    }
    _saveTheme(themes[index], page, () => {
      _handleSaveThemes(index+1, themes, page, callback);
    });
  }

  function _saveTheme(theme, page, callback) {
    const savedTheme = Theme.findById(theme.id);
    if (!!savedTheme) {
      callback();
      return;
    }
    Theme.create({...theme, page: page});
    _handleSaveSampleImage(theme.assets, callback);
  }

  async function _handleSaveSampleImage(assets, callback) {
    const {android, ios} = assets;
    const image = Platform.OS == 'ios' ? ios['1x'] : android['mdpi']
    const imageFile = `${RNFS.DocumentDirectoryPath}/${fileUtil.getFilenameFromUrl(image)}`;
    if (!!imageFile && !await RNFS.exists(imageFile)) {
      fileService.download(image, (filename, isNewFile) => {
        !!isNewFile && DownloadedFile.create({name: fileUtil.getFilenameFromUrl(filename), type: 'image'})
        callback();
      }, () => {
        callback();
      });
      return;
    }
    callback();
  }

  async function downloadThemeImages(theme, callback) {
    const {android_images, ios_images} = theme;
    const images = Object.values(JSON.parse(Platform.OS == 'ios' ? ios_images : android_images));
    if (images.length == 0) {
      callback();
      return;
    }

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const imageFile = `${RNFS.DocumentDirectoryPath}/${fileUtil.getFilenameFromUrl(image)}`;
      const isLastItem = i == images.length - 1;
      if (!!imageFile && !await RNFS.exists(imageFile)) {
        fileService.download(image, (filename, isNewFile) => {
          !!isNewFile && DownloadedFile.create({name: fileUtil.getFilenameFromUrl(filename), type: 'image'})
          if (isLastItem)
            callback();
        }, () => {
          if (isLastItem)
            callback();
        });
      }
      else if (isLastItem) {
        callback();
      }
    }
  }
})();

export default themeService;