import Moment from 'moment';
import realm from '../db/schema';
import uuidv4 from '../utils/uuidv4_util'
import User from './User';
import {APP_VISIT} from '../constants/visit_constant';

const MODEL = 'Visit';

const Visit = (() => {
  return {
    create,
    findUnsyncedVisitsByUserUuid,
    deleteByUuid,
    update,
    getAppVisitsWithoutUser,
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

  function update(uuid, data) {
    realm.write(() => {
      realm.create(MODEL, Object.assign(data, { uuid: uuid }), 'modified');
    });
  }

  function getAppVisitsWithoutUser() {
    return realm.objects(MODEL).filtered(`code = '${APP_VISIT}' AND user_uuid = null`);
  }

  function _buildData(data) {
    const user = new User();
    return {
      ...data,
      uuid: uuidv4(),
      user_uuid: user.loggedInUser() ? user.loggedInUser().uuid : null,
      visit_date: Moment().toDate(),
    }
  }
})();

export default Visit;