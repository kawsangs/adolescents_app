import BaseModel from './BaseModel';

const MODEL = 'Theme';

class Theme {
  static getAll = () => {
    return [...BaseModel.getAll(MODEL)];
  }

  static getAllActive = () => {
    return [...BaseModel.findByAttr(MODEL, { active: true })];
  }

  static create = (params) => {
    console.log('**** theme params = ', params);
    BaseModel.create(MODEL, params);
  }

  static findById = (id) => {
    return BaseModel.findByAttr(MODEL, { id: `'${id}'` })[0];
  }

  static update = (id, params) => {
    BaseModel.update(MODEL, id, params);
  }

  static deleteById = (id) => {
    BaseModel.deleteItem(this.findById(id));
  }
}

export default Theme;