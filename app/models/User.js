import BaseModel from './BaseModel';

class User {
  static getAll = () => {
    return [...BaseModel.getAll(User.name)];
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(User.name, uuid);
  }

  static create = (params) => {
    BaseModel.create(User.name, params);
  }

  static update = (uuid, params) => {
    BaseModel.update(User.name, uuid, params);
  }

  static currentLoggedIn = () => {
    return BaseModel.findByAttr(User.name, {logged_in: true})[0];
  }

  static hasCurrentLoggedIn = () => {
    return !!this.currentLoggedIn();
  }

  static unsynced = () => {
    // we use spread operator to prevent the live update of the realm object
    return [...BaseModel.findByAttr(User.name, {synced: false}, '', {type: 'ASC', column: 'registered_at'})]
  }

  static synced = () => {
    return [...BaseModel.findByAttr(User.name, {synced: true}, '', {type: 'ASC', column: 'registered_at'})];
  }

  static logOut = () => {
    this.update(this.currentLoggedIn().uuid, { logged_in: false });
  }
}

export default User;