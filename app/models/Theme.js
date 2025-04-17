import BaseModel from './BaseModel';
import Moment from 'moment';
import uuidv4 from '../utils/uuidv4_util';
import themes from '../db/json/themes.json';

const MODEL = 'Theme';

class Theme {
  static seedOriginalTheme = () => {
    themes.forEach(theme => {
      BaseModel.create(MODEL, {
        ...theme,
        uuid: uuidv4(),
        updated_at: Moment.unix(theme.updated_at).toDate(),
        android_images: (!!theme.assets && !!theme.assets.android) ? JSON.stringify(theme.assets.android) : null,
        ios_images: (!!theme.assets && !!theme.assets.ios) ? JSON.stringify(theme.assets.ios) : null,
      });
    });
  }

  static getAll = () => {
    return [...BaseModel.getAll(MODEL)];
  }

  static getDefault = () => {
    return BaseModel.findByAttr(MODEL, { default: true })[0];
  }

  static create = (params) => {
    BaseModel.create(MODEL, {
      ...params,
      uuid: uuidv4(),
      android_images: (!!params.assets && !!params.assets.android) ? JSON.stringify(params.assets.android) : null,
      ios_images: (!!params.assets && !!params.assets.ios) ? JSON.stringify(params.assets.ios) : null,
      updated_at: Moment.unix(params.updated_at).toDate(),
    });
  }

  static findById = (id) => {
    return BaseModel.findByAttr(MODEL, { id: `'${id}'` })[0];
  }

  static findAllByPage = (page) => {
    return [...BaseModel.findByAttr(MODEL, { page: page })];
  }

  static update = (uuid, params) => {
    BaseModel.update(MODEL, uuid, { ...params, updated_at: Moment.unix(params.updated_at).toDate(), published_at: Moment.unix(params.published_at).toDate() });
  }

  static updateDefault = (uuid) => {
    const defaultTheme = this.getDefault();
    BaseModel.update(MODEL, defaultTheme.uuid, { default: false });
    BaseModel.update(MODEL, uuid, { default: true });
  }

  static deleteById = (id) => {
    BaseModel.deleteItem(this.findById(id));
  }

  static deleteAll = () => {
    BaseModel.deleteAll(MODEL);
  }
}

export default Theme;