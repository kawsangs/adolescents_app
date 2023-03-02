import RNFS from 'react-native-fs';
import urlUtil from '../utils/url_util';
import fileUtil from '../utils/file_util';

const fileDownloadService = (() => {
  return {
    download
  }

  async function download(filePath, successCallback, failureCallback = null) {
    const filename = fileUtil.getFilenameFromUrl(filePath)
    const options = {
      fromUrl: urlUtil.getAbsoluteUrl(filePath),
      toFile: `${RNFS.DocumentDirectoryPath}/${filename}`
    }

    if (await RNFS.exists(options.toFile))
      return !!successCallback && successCallback(filename, `file://${options.toFile}`, false);   // return (filename, filePath, isNewFile)

    await RNFS.downloadFile(options).promise.then(res => {
      !!successCallback && successCallback(filename, `file://${options.toFile}`, true)
    }).catch(err => {
      !!failureCallback && failureCallback()
    })
  }
})()

export default fileDownloadService;