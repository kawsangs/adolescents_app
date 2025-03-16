import BaseModel from './BaseModel';
import Moment from 'moment';
import color from '../themes/color';

const MODEL = 'Theme';

class Theme {
  static seedOriginalTheme = () => {
    this.create({
      id: '1',
      name: 'ម៉ូដរចនាដើម',
      status: 'published',
      default: true,
      primary_color: color.primaryColor,
      secondary_color: color.secondaryColor,
      primary_text_color: 'white',
      secondary_text_color: 'black',
      published_at: Moment().toDate(),
      updated_at: Moment().toDate()
    });
  }

  static getAll = () => {
    return [...BaseModel.getAll(MODEL)];
  }

  static create = (params) => {
    BaseModel.create(MODEL, {...params, updated_at: Moment.unix(params.updated_at).toDate(), published_at: Moment.unix(params.published_at).toDate()});
  }

  static findById = (id) => {
    return BaseModel.findByAttr(MODEL, { id: `'${id}'` })[0];
  }

  static update = (id, params) => {
    BaseModel.update(MODEL, id, { ...params, updated_at: Moment.unix(params.updated_at).toDate(), published_at: Moment.unix(params.published_at).toDate() });
  }

  static deleteById = (id) => {
    BaseModel.deleteItem(this.findById(id));
  }

  static deleteAll = () => {
    BaseModel.deleteAll(MODEL);
  }
}

export default Theme;