import Moment from 'moment';
import realm from '../db/schema';
import uuidv4 from '../utils/uuidv4_util'
import User from './User';

const MODEL = 'Visit';

const Visit = (() => {
  return {
    create,
    findUnsyncedVisitsByUserUuid,
    deleteByUuid,
  }

  function create(data) {
    realm.write(() => {
      realm.create(MODEL, _buildData(data));
    });
  }

  function findUnsyncedVisitsByUserUuid(userUuid) {
    return [...realm.objects(MODEL).filtered(`user_uuid = '${userUuid}' SORT(visit_date ASC)`)];
  }

  function deleteByUuid(uuid) {
    const visit = realm.objects(MODEL).filtered(`uuid = '${uuid}'`)[0];
    if (!!visit) {
      realm.write(() => {
        realm.delete(visit);
      });
    }
  }

  function _buildData(data) {
    return {
      ...data,
      uuid: uuidv4(),
      user_uuid: User.loggedInUser().uuid,
      visit_date: Moment().toDate(),
    }
  }
})();

export default Visit;