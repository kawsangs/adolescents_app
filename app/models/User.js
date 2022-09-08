import realm from '../db/schema';

const MODEL = 'User';

const User = (() => {
  return {
    find,
    create,
    update,
    loggedInUser,
  };

  function find(uuid) {
    return realm.objects(MODEL).filtered(`uuid = '${uuid}'`)[0];
  }

  function create(data) {
    realm.write(() => {
      realm.create(MODEL, data);
    });
  }

  function update(uuid, data) {
    realm.write(() => {
      realm.create(MODEL, Object.assign(data, { uuid: uuid }), 'modified');
    });
  }

  function loggedInUser() {
    return realm.objects(MODEL).filtered(`logged_in = true`)[0];
  }
})();

export default User;