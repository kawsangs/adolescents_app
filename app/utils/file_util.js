import RNFS from 'react-native-fs';
import DownloadedFile from '../models/DownloadedFile';
import audioSources from '../constants/audio_source_constant';
import imageSources from '../constants/image_source_constant';

const fileUtil = (() => {
  return {
    getFilenameFromUrl,
    getSourceByUrl,
  }

  function getFilenameFromUrl(url) {
    if (!url) return '';
    const urlWithoutQueryString = url.split('?')[0];
    const splitedPaths = urlWithoutQueryString.split('/');
    return splitedPaths[splitedPaths.length - 1];
  }

  function getSourceByUrl(url, type) {
    if (!url) return null;

    const filename = getFilenameFromUrl(url);
    const downloadedFile = type == 'image' ? DownloadedFile.findImageByName(filename) : DownloadedFile.findAudioByName(filename);
    const fileSource = type == 'image' ? imageSources[filename] : audioSources[filename];
    return !!downloadedFile ? { uri: `file://${RNFS.DocumentDirectoryPath}/${downloadedFile.name}` } : !!fileSource ? fileSource : null;
  }
})()

export default fileUtil;