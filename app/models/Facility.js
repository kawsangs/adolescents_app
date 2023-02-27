import BaseModel from './BaseModel';
import Tag from './Tag';
import facilities from '../db/json/facilities.json';

const MODEL = "Facility"

class Facility {
  static seedData = () => {
    BaseModel.deleteAll(MODEL);
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

  static findByService = (service) => {
    return BaseModel.containsByAttr(MODEL, 'services', `'${service}'`);
  }

  static findByTagUuid = (tagUuid) => {
    return BaseModel.findByAttr(MODEL, { tags: `'${Tag.findByUuid(tagUuid).name}'` }, '', {}, 'ANY');
  }

  static findByTag = (tag) => {
    return BaseModel.containsByAttr(MODEL, 'tags', `'${tag}'`);
  }

  static containsByName(name) {
    return BaseModel.containsByAttr(MODEL, 'name', `'${name}'`);
  }

  static create(data) {
    BaseModel.create(MODEL, data)
  }

  static update(uuid, data) {
    BaseModel.update(MODEL, uuid, data)
  }

  static getFormattedData = (facility) => {
    if (!!facility.id)
      return {...facility, uuid: facility.id, working_days: JSON.stringify(facility.working_days), service_uuids: facility.service_ids}

    return {...facility, working_days: JSON.stringify(facility.working_days), service_uuids: facility.service_ids}
  }

  // private method
  static #getFormattedFacilities = () => {
    let formattedFacilities = [];
    facilities.map(facility => {
      formattedFacilities.push(this.getFormattedData(facility));
    });
    return formattedFacilities;
  }
}

export default Facility;