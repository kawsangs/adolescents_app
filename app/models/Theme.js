import BaseModel from './BaseModel';
import Moment from 'moment';

const MODEL = 'Theme';

class Theme {
  static getAll = () => {
    return [...BaseModel.getAll(MODEL)];
  }

  static getAllActive = () => {
    return [...BaseModel.findByAttr(MODEL, { active: true })];
  }

  static create = (params) => {
    BaseModel.create(MODEL, {...params, updated_at: Moment.unix(params.updated_at).toDate()});
  }

  static findById = (id) => {
    return BaseModel.findByAttr(MODEL, { id: `'${id}'` })[0];
  }

  static update = (id, params) => {
    BaseModel.update(MODEL, id, { ...params, updated_at: Moment.unix(params.updated_at).toDate() });
  }

  static deleteById = (id) => {
    BaseModel.deleteItem(this.findById(id));
  }

  static deleteAll = () => {
    BaseModel.deleteAll(MODEL);
  }
}

export default Theme;