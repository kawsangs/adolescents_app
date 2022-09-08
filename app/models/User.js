import realm from '../db/schema';

const MODEL = 'User';

const User = (() => {
  return {
    create,
  };

  function create(data){
    realm.write(() => {
      realm.create(MODEL, data);
    });
  }
})();

export default User;