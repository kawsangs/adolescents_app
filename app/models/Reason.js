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

  static update = (uuid, params) => {
    BaseModel.update(MODEL, uuid, params);
  }
}

export default Reason;