import BaseModel from './BaseModel';
import realm from '../db/schema';
import uuidv4 from '../utils/uuidv4_util';
import Moment from 'moment';

const MODEL = "Notification";
class Notification {
  static getAll = () => {
    return BaseModel.getAll(MODEL).sorted('createdAt', true);
  }

  static getUnreads = () => {
    return Notification.getAll().filtered('read = false');
  }

  static findById = (id) => {
    return BaseModel.findByAttr(MODEL, {id: `'${id}'`}, '', {})[0];
  }

  static create = (params) => {
    BaseModel.create(MODEL, { ...params, uuid: uuidv4(), createdAt: Moment().toDate() });
  }

  static deleteAll = () => {
    BaseModel.deleteAll(MODEL);
  }

  static setAllAsRead = () => {
    realm.write(() => {
      const notifications = Notification.getUnreads();

      for (const notification of notifications) {
        notification.read = true
      }
    });
  }

  static firstRecord = () => {
    const notifications = this.getAll();
    return notifications.length > 0 ? notifications[notifications.length - 1] : null;
  }

  static deleteByUuid = (uuid) => {
    BaseModel.deleteByUuid(MODEL, uuid)
  }
}

export default Notification;