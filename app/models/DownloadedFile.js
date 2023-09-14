import RNFS from 'react-native-fs';
import BaseModel from './BaseModel';
import fileUtil from '../utils/file_util';
import uuidv4 from '../utils/uuidv4_util';

const MODEL = 'DownloadedFile';

class DownloadedFile {
  static getAll() {
    return BaseModel.getAll(MODEL);
  }

  static getAllImages() {
    return BaseModel.findByAttr(MODEL, {type: `'image'`});
  }

  static create(data) {
    BaseModel.create(MODEL, {...data, uuid: uuidv4()})
  }

  static findImageByName(name) {
    return BaseModel.findByAttr(MODEL, {name: `'${name}'`, type: `'image'`}, 'AND')[0];
  }

  static findAudioByName(name) {
    return BaseModel.findByAttr(MODEL, {name: `'${name}'`, type: `'audio'`}, 'AND')[0];
  }

  static findByName(name) {
    return BaseModel.findByAttr(MODEL, {name: `'${name}'`})[0];
  }

  static isFileNameExisted(fileUrl) {
    return !!this.findByName(fileUtil.getFilenameFromUrl(fileUrl))
  }

  static getPathByUrl(fileUrl) {
    if (!fileUrl) return null;

    const file = this.findByName(fileUtil.getFilenameFromUrl(fileUrl))
    return !!file ? `file://${RNFS.DocumentDirectoryPath}/${file.name}` : null
  }
}

export default DownloadedFile;