import BaseModel from './BaseModel';

const MODEL = 'User';

class User extends BaseModel {
  constructor() {
    super(MODEL);
  }

  loggedInUser = () => {
    return this.findByAttr({logged_in: true})[0];
  }

  unsyncedUsers = () => {
    // we use spread operator to prevent the live update of the realm object
    return [...this.findByAttr({synced: false}, '', {type: 'ASC', column: 'registered_at'})];
  }

  syncedUsers = () => {
    return [...this.findByAttr({synced: true}, '', {type: 'ASC', column: 'registered_at'})];
  }

  isAnonymous = () => {
    const user = this.loggedInUser();
    return !!user ? user.age == -1 : false;
  }
}

export default User;