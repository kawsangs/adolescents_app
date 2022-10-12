import BaseModel from './BaseModel';
import services from '../db/json/services.json';

class Service {
  static seedData = () => {
    BaseModel.seedData(Service.name, services);
  }

  static getAll = () => {
    return BaseModel.getAll(Service.name);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(Service.name, uuid);
  }
}

export default Service;