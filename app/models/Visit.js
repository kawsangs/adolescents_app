import Moment from 'moment';
import BaseModel from './BaseModel';
import uuidv4 from '../utils/uuidv4_util'
import User from './User';
import {APP_VISIT} from '../constants/visit_constant';

const MODEL = 'Visit';

class Visit extends BaseModel {
  constructor() {
    super(MODEL);
  }

  createNew(data) {
    this.create(this.#buildData(data));
  }

  findUnsyncedVisitsByUserUuid = (userUuid) => {
    return [...this.findByAttr({user_uuid: `'${userUuid}'`}, '', {type:'ASC', column: 'visit_date'})];
  }

  getAppVisitsWithoutUser = () => {
    return this.findByAttr({code: `'${APP_VISIT}'`, user_uuid: null}, 'AND');
  }

  // private method
  #buildData = (data) => {
    const user = new User();
    return {
      ...data,
      uuid: uuidv4(),
      user_uuid: user.loggedInUser() ? user.loggedInUser().uuid : null,
      visit_date: Moment().toDate(),
    }
  }
}

export default Visit;