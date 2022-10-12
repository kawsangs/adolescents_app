import Moment from 'moment';
import BaseModel from './BaseModel';
import uuidv4 from '../utils/uuidv4_util'
import User from './User';
import {APP_VISIT} from '../constants/visit_constant';

class Visit extends BaseModel {
  static create = (params) => {
    BaseModel.create(Visit.name, this.#buildParams(params));
  }

  static update = (uuid, params) => {
    BaseModel.update(Visit.name, uuid, params);
  }

  static findUnsyncedVisitsByUserUuid = (userUuid) => {
    return [...this.findByAttr(Visit.name, {user_uuid: `'${userUuid}'`}, '', {type:'ASC', column: 'visit_date'})];
  }

  static getAppVisitsWithoutUser = () => {
    return this.findByAttr(Visit.name, {code: `'${APP_VISIT}'`, user_uuid: null}, 'AND');
  }

  static deleteByUuid = (uuid) => {
    BaseModel.deleteByUuid(Visit.name, uuid);
  }

  // private method
  static #buildParams = (params) => {
    return {
      ...params,
      uuid: uuidv4(),
      user_uuid: User.currentLoggedIn() ? User.currentLoggedIn().uuid : null,
      visit_date: Moment().toDate(),
    }
  }
}

export default Visit;