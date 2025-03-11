import BaseModel from './BaseModel';

const MODEL = 'Theme';

class Theme {
  static getAll = () => {
    return [...BaseModel.getAll(MODEL)];
  }

  static getAllActive = () => {
    return [...BaseModel.findByAttr(MODEL, { active: true })];
  }

  static findById = (id) => {
    return BaseModel.findByAttr(MODEL, { id: `'${id}'` })[0];
  }

  static update = (id, params) => {
    BaseModel.update(MODEL, id, params);
  }

  static delete = (id) => {
    BaseModel.deleteItem(this.findById(id));
  }
}

export default Theme;