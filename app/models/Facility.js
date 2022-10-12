import BaseModel from './BaseModel';
import realm from '../db/schema';
import facilities from '../db/json/facilities.json';

class Facility extends BaseModel {
  static seedData = () => {
    BaseModel.seedData(Facility.name, this.#getFormattedFacilities());
  }

  static getAll = () => {
    return BaseModel.getAll(Facility.name);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(Facility.name, uuid);
  }

  static findByServiceUuid = (serviceUuid) => {
    return realm.objects(Facility.name).filtered(`ANY service_uuids = '${serviceUuid}'`);
  }

  // private method
  static #getFormattedFacilities = () => {
    let formattedFacilities = [];

    facilities.map(facility => {
      formattedFacilities.push({...facility, working_days: JSON.stringify(facility.working_days)});
    });

    return formattedFacilities;
  }
}

export default Facility;