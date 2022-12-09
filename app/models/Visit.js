import Moment from 'moment';
import BaseModel from './BaseModel';
import uuidv4 from '../utils/uuidv4_util'
import User from './User';
import {APP_VISIT} from '../constants/visit_constant';

const MODEL = "Visit"

class Visit {
  static create = (params) => {
    BaseModel.create(MODEL, this.#buildParams(params));
  }

  static update = (uuid, params) => {
    BaseModel.update(MODEL, uuid, params);
  }

  static findUnsyncedVisitsByUserUuid = (userUuid) => {
    return [...BaseModel.findByAttr(MODEL, {user_uuid: `'${userUuid}'`}, '', {type:'ASC', column: 'visit_date'})];
  }

  static getAppVisitsWithoutUser = () => {
    return BaseModel.findByAttr(MODEL, {code: `'${APP_VISIT}'`, user_uuid: null}, 'AND');
  }

  static deleteByUuid = (uuid) => {
    BaseModel.deleteByUuid(MODEL, uuid);
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