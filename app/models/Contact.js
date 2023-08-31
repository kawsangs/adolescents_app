import BaseModel from './BaseModel';

const MODEL = "Contact";

class Contact {
  static seedData = (items) => {
    BaseModel.seedData(MODEL, items);
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }
}

export default Contact;