import BaseModel from './BaseModel';
import realm from '../db/schema';

const MODEL = 'Facility';

class Facility extends BaseModel {
  constructor() {
    super(MODEL);
  }

  findByServiceUuid = (serviceUuid) => {
    return realm.objects(MODEL).filtered(`ANY service_uuids = '${serviceUuid}'`);
  }
}

export default Facility;