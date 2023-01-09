import BaseModel from './BaseModel';
import facilities from '../db/json/facilities.json';

const MODEL = "Facility"

class Facility {
  static seedData = () => {
    BaseModel.seedData(MODEL, this.#getFormattedFacilities());
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static findByServiceUuid = (serviceUuid) => {
    return BaseModel.findByAttr(MODEL, { service_uuids: `'${serviceUuid}'` }, '', {}, 'ANY');
  }

  static findByProvinceId = (provinceId) => {
    return BaseModel.findByAttr(MODEL, { province_id: `'${provinceId}'` }, {});
  }

  static containsByName(name) {
    return BaseModel.containsByAttr(MODEL, 'name', `'${name}'`);
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