'use strict';

import Realm from 'realm';
import RNFS from 'react-native-fs';
import imageSources from '../../../constants/image_source_constant';
import audioSources from '../../../constants/audio_source_constant';
import fileUtil from '../../../utils/file_util';
import DownloadedFile from '../../../models/DownloadedFile';

class Category extends Realm.Object {
   get imageSource() {
    if (!this.image_url) return null;

    const filename = fileUtil.getFilenameFromUrl(this.image_url);
    const downloadedImage = DownloadedFile.findImageByName(filename)
    return !!downloadedImage ? { uri: `file://${RNFS.DocumentDirectoryPath}/${downloadedImage.name}` } : !!imageSources[filename] ? imageSources[filename] : null;
  }

  get audioSource() {
    if (!this.audio_url) return null;

    const filename = fileUtil.getFilenameFromUrl(this.audio_url);
    const downloadedAudio = DownloadedFile.findAudioByName(filename)
    return !!downloadedAudio ? { uri: `file://${RNFS.DocumentDirectoryPath}/${downloadedAudio.name}` } : !!audioSources[filename] ? audioSources[filename] : null;
  }
}

Category.schema = {
  name: 'Category',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    id: 'string?',
    code: 'string',
    name: 'string',
    description: 'string?',
    audio_url: 'string?',
    image_url: 'string?',
    parent_code: 'string?',
    parent_id: 'string?',
    level: 'int',
    sources: {type:'string[]', default: [], optional: true },
    tag_list: 'string?'
  }
}

export default Category;
