import BaseModel from './BaseModel';
import facilities from '../db/json/facilities.json';

class Facility {
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
    return BaseModel.findByAttr(Facility.name, { service_uuids: `'${serviceUuid}'` }, '', {}, 'ANY');
  }

  static containsByName(name) {
    return BaseModel.containsByAttr(Facility.name, 'name', `'${name}'`);
  }

  // private method
  static #getFormattedFacilities = () => {
    let formattedFacilities = [];

    facilities.map(facility => {
      formattedFacilities.push({...facility, uuid: facility.id, working_days: JSON.stringify(facility.working_days), service_uuids: facility.service_ids});
    });

    return formattedFacilities;
  }
}

export default Facility;