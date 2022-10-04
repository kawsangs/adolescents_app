import realm from '../db/schema';

const MODEL = 'User';

const User = (() => {
  return {
    find,
    create,
    update,
    loggedInUser,
    unsyncedUsers,
    syncedUsers,
    isAnonymous,
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

  function unsyncedUsers() {
    // we use spread operator to prevent the live update of the realm object
    return [...realm.objects(MODEL).filtered(`synced = false SORT(registered_at ASC)`)];
  }

  function syncedUsers() {
    return [...realm.objects(MODEL).filtered(`synced = true SORT(registered_at ASC)`)];
  }

  function isAnonymous() {
    const user = loggedInUser();
    return !!user ? user.age == -1 : false;
  }
})();

export default User;