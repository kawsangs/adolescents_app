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
    syncData
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
      _handleManipulateTheme(res.themes);
      _syncByPage(page+1, allPage, successCallback, failureCallback);
    }, (error) => !!failureCallback && failureCallback());
  }

  function _handleManipulateTheme(themes) {
    themes.map(theme => {
      const savedTheme = Theme.findById(theme.id);
      if (!theme.deleted_at) {
        !!savedTheme ? Theme.update(theme.uuid, theme) : Theme.create(theme);
        _handleSaveImages(theme.assets);
      }
      else if (!!savedTheme && !!theme.deleted_at)
        Theme.deleteById(theme.id);
    });
  }

  async function _handleSaveImages(assets) {
    const {android, ios} = assets;
    let images = Platform.OS == 'ios' ? Object.values(ios) : Object.values(android);
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const imageFile = `${RNFS.DocumentDirectoryPath}/${fileUtil.getFilenameFromUrl(image)}`;
      if (!!imageFile && !await RNFS.exists(imageFile)) {
        console.log('=== download image ===', image);
        fileService.download(image, (filename, isNewFile) => !!isNewFile && DownloadedFile.create({name: fileUtil.getFilenameFromUrl(filename), type: 'image'}));
      }
    }
  }
})();

export default themeService;