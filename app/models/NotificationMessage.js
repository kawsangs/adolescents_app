import BaseModel from './BaseModel';
import realm from '../db/schema';
import uuidv4 from '../utils/uuidv4_util';

class NotificationMessage {
  static getAll = () => {
    return BaseModel.getAll(NotificationMessage.name);
  }

  static findById = (id) => {
    return realm.objects(NotificationMessage.name).filtered(`id = '${id}'`)[0];
  }

  static create = (params) => {
    console.log('------create')
    BaseModel.create(NotificationMessage.name, { ...params, uuid: uuidv4() });
  }
}

export default NotificationMessage;