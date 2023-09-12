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
    BaseModel.createL(MODEL, this._buildData(params));
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

  // private method
  static _buildData = (item) => {
    const params = {
      uuid: uuidv4(),
      id: !!item.id ? item.id : null,
      title: item.title,
      content: item.body,
      createdAt: Moment().toDate(),
      data: !!item.data ? JSON.stringify(item.data) : null,
    };

    return params;
  }
}

export default Notification;