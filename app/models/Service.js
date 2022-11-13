import BaseModel from './BaseModel';
import services from '../db/json/services.json';

class Service {
  static seedData = () => {
    BaseModel.seedData(Service.name, this.#getFormattedServices());
  }

  static getAll = () => {
    return BaseModel.getAll(Service.name);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(Service.name, uuid);
  }

  static containsByName(name) {
    return BaseModel.containsByAttr(Service.name, 'name', `'${name}'`);
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