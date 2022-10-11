import BaseModel from './BaseModel';

class User extends BaseModel {
  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(User.name, uuid);
  }

  static create = (params) => {
    BaseModel.create(User.name, params);
  }

  static update = (uuid, params) => {
    BaseModel.update(User.name, uuid, params);
  }

  static loggedInUser = () => {
    return this.findByAttr(User.name, {logged_in: true})[0];
  }

  static hasLoggedInUser = () => {
    return !!this.loggedInUser();
  }

  static unsyncedUsers = () => {
    // we use spread operator to prevent the live update of the realm object
    return [...this.findByAttr(User.name, {synced: false}, '', {type: 'ASC', column: 'registered_at'})]
  }

  static syncedUsers = () => {
    return [...this.findByAttr(User.name, {synced: true}, '', {type: 'ASC', column: 'registered_at'})];
  }
}

export default User;