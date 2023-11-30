import BaseModel from './BaseModel';
import reasons from '../db/json/reasons.json';

const MODEL = "Reason"

class Reason {
  static seedData = () => {
    BaseModel.seedData(MODEL, reasons);
  }

  static getAll = () => {
    return [...BaseModel.getAll(MODEL)];
  }

  static create = (params) => {
    BaseModel.create(MODEL, params);
  }

  static findById = (id) => {
    return BaseModel.findByAttr(MODEL, {id: `'${id}'`})[0];
  }

  static update = (id, params) => {
    BaseModel.update(MODEL, id, params);
  }

  static deleteById = (id) => {
    BaseModel.deleteItem(this.findById(id));
  }
}

export default Reason;