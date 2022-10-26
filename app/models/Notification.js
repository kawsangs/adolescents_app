import BaseModel from './BaseModel';
import realm from '../db/schema';
import uuidv4 from '../utils/uuidv4_util';
import Moment from 'moment';

class Notification {
  static getAll = () => {
    return BaseModel.getAll(Notification.name).sorted('createdAt', true);
  }

  static getUnreads = () => {
    return Notification.getAll().filtered('read = false');
  }

  static findById = (id) => {
    return realm.objects(Notification.name).filtered(`id = '${id}'`)[0];
  }

  static create = (params) => {
    BaseModel.create(Notification.name, { ...params, uuid: uuidv4(), createdAt: Moment().toDate() });
  }

  static deleteAll = () => {
    realm.write(() => {
      realm.delete(Notification.getAll());
    });
  }

  static setAllAsRead = () => {
    realm.write(() => {
      const notifications = Notification.getUnreads();

      for (const notification of notifications) {
        notification.read = true
      }
    });
  }
}

export default Notification;