import BaseModel from './BaseModel';

const MODEL = "User"

class User {
  static getAll = () => {
    return [...BaseModel.getAll(MODEL)];
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static create = (params) => {
    BaseModel.create(MODEL, params);
  }

  static update = (uuid, params) => {
    BaseModel.update(MODEL, uuid, params);
  }

  static currentLoggedIn = () => {
    return BaseModel.findByAttr(MODEL, {logged_in: true})[0];
  }

  static hasCurrentLoggedIn = () => {
    return !!this.currentLoggedIn();
  }

  static currentUserHasOccupation = () => {
    return this.currentLoggedIn().occupation != 'n_a';
  }

  static unsynced = () => {
    // we use spread operator to prevent the live update of the realm object
    return [...BaseModel.findByAttr(MODEL, {synced: false}, '', {type: 'ASC', column: 'registered_at'})]
  }

  static synced = () => {
    return [...BaseModel.findByAttr(MODEL, {synced: true}, '', {type: 'ASC', column: 'registered_at'})];
  }

  static logOut = () => {
    this.update(this.currentLoggedIn().uuid, { logged_in: false });
  }
}

export default User;