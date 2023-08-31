import RNFS from 'react-native-fs';
import urlUtil from '../utils/url_util';
import fileUtil from '../utils/file_util';
import DownloadedFile from '../models/DownloadedFile';
import audioSources from '../constants/audio_source_constant';
import imageSources from '../constants/image_source_constant';

const fileService = (() => {
  return {
    download,
    getByUrl,
  }

  async function download(filePath, successCallback, failureCallback = null) {
    const filename = fileUtil.getFilenameFromUrl(filePath)
    const options = {
      fromUrl: urlUtil.isUrlWithHostname(filePath) ? filePath : urlUtil.getAbsoluteUrl(filePath),
      toFile: `${RNFS.DocumentDirectoryPath}/${filename}`,
      fileCache: true
    }

    if (await RNFS.exists(options.toFile))
      return !!successCallback && successCallback(filename, false);   // return (filename, isNewFile)

    await RNFS.downloadFile(options).promise.then(res => {
      !!successCallback && successCallback(filename, true)
    }).catch(err => {
      !!failureCallback && failureCallback()
    })
  }

  function getByUrl(url, type) {
    if (!url) return null;

    const filename = fileUtil.getFilenameFromUrl(url);
    const downloadedFile = type == 'image' ? DownloadedFile.findImageByName(filename) : DownloadedFile.findAudioByName(filename);
    const fileSource = type == 'image' ? imageSources[filename] : audioSources[filename];
    return !!downloadedFile ? { uri: `file://${RNFS.DocumentDirectoryPath}/${downloadedFile.name}` } : !!fileSource ? fileSource : null;
  }
})()

export default fileService;