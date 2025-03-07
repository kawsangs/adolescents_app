import RNFS from 'react-native-fs';
import urlUtil from '../utils/url_util';
import fileUtil from '../utils/file_util';

const fileService = (() => {
  return {
    download,
  }

  async function download(filePath, successCallback, failureCallback = null) {
    const filename = fileUtil.getFilenameFromUrl(filePath)
    const options = {
      fromUrl: urlUtil.isUrlWithHostname(filePath) ? filePath : urlUtil.getAbsoluteUrl(filePath),
      toFile: `${RNFS.DocumentDirectoryPath}/${filename}`,
      fileCache: true
    }

    if (await RNFS.exists(options.toFile))
      return !!successCallback && successCallback(options.toFile, false);   // return (filename, isNewFile)

    await RNFS.downloadFile(options).promise.then(res => {
      !!successCallback && successCallback(options.toFile, true)
    }).catch(err => {
      !!failureCallback && failureCallback()
    })
  }
})()

export default fileService;