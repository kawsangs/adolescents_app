import Moment from 'moment';
import BaseModel from './BaseModel';
import uuidv4 from '../utils/uuidv4_util'
import User from './User';

const MODEL = 'ThemeUsage';

class ThemeUsage {
  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static create = (themeId) => {
    BaseModel.create(MODEL, this.#buildParams({ theme_id: themeId }));
  }

  static update = (uuid, params) => {
    BaseModel.update(MODEL, uuid, params);
  }

  static findUnsyncedByUserUuid = (userUuid) => {
    return [...BaseModel.findByAttr(MODEL, {user_uuid: `'${userUuid}'`})];
  }

  static deleteByUuid = (uuid) => {
    BaseModel.deleteByUuid(MODEL, uuid);
  }

  static deleteByUser = (userUuid) => {
    const themeUsages = BaseModel.findByAttr(MODEL, {user_uuid: `'${userUuid}'`});
    BaseModel.deleteByCollection(themeUsages);
  }

  // private method
  static #buildParams = (params) => {
    return {
      ...params,
      uuid: uuidv4(),
      user_uuid: User.currentLoggedIn() ? User.currentLoggedIn().uuid : null,
      applied_at: Moment().toDate(),
    }
  }
}

export default ThemeUsage;