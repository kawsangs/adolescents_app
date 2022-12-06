import BaseModel from './BaseModel';
import services from '../db/json/services.json';

const MODEL = "Service"

class Service {
  static seedData = () => {
    BaseModel.seedData(MODEL, this.#getFormattedServices());
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static containsByName(name) {
    return BaseModel.containsByAttr(MODEL, 'name', `'${name}'`);
  }

  // private method
  static #getFormattedServices = () => {
    let formattedServices = [];

    services.map(service => {
      formattedServices.push({...service, uuid: service.id});
    });

    return formattedServices;
  }
}

export default Service;