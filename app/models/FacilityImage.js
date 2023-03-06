import RNFS from 'react-native-fs';
import BaseModel from './BaseModel';
import fileUtil from '../utils/file_util';
import uuidv4 from '../utils/uuidv4_util';

const MODEL = "FacilityImage"

class FacilityImage {
  static getAll() {
    return BaseModel.getAll(MODEL);
  }

  static create(data) {
    BaseModel.create(MODEL, {...data, uuid: uuidv4()})
  }

  static findByName(name) {
    return BaseModel.findByAttr(MODEL, {name: `'${name}'`})[0]
  }

  static isFileNameExisted(fileUrl) {
    return !!this.findByName(fileUtil.getFilenameFromUrl(fileUrl))
  }

  static getImagePath(fileUrl) {
    if (!fileUrl) return null;

    const facilityImage = this.findByName(fileUtil.getFilenameFromUrl(fileUrl))
    return !!facilityImage ? `file://${RNFS.DocumentDirectoryPath}/${facilityImage.name}` : null
  }
}

export default FacilityImage;