import axios from 'axios';
import RNFS from 'react-native-fs';
import urlUtil from '../utils/url_util';

const imageDownloadService = (() => {
  return {
    download
  }

  async function download(filePath) {
    const options = {
      fromUrl: urlUtil.getAbsoluteUrl(filePath),
      toFile: `${RNFS.DocumentDirectoryPath}/${_getFilename(filePath)}`
    }
    console.log('== image download options = ', options)

    await RNFS.downloadFile(options).then(res => {
      console.log('= successfully download image = ', res)
    }).catch(err => {
      console.log('== download image error = ', err)
    })
  }

  // private method
  function _getFilename(fileUrl) {
    let splitPaths = fileUrl.split('/');
    return splitPaths[splitPaths.length - 1]
  }
})()

export default imageDownloadService;