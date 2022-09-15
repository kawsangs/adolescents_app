import Moment from 'moment';
import realm from '../db/schema';
import uuidv4 from '../utils/uuidv4_util'

const MODEL = 'Visit';

const Visit = (() => {
  return {
    create,
    getUnsyncedVisits,
    deleteByUuid,
  }

  function create(data) {
    realm.write(() => {
      realm.create(MODEL, _buildData(data));
    });
  }

  function getUnsyncedVisits() {
    return [...realm.objects(MODEL).filtered(`synced = false SORT(visit_date ASC)`)];
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
      user_uuid: 'user_01', // Todo: use the uuid of the logged user
      visit_date: Moment().toDate(),
      synced: false
    }
  }
})();

export default Visit;