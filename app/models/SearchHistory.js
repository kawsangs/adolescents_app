import Moment from 'moment';
import BaseModel from './BaseModel';
import uuidv4 from '../utils/uuidv4_util'

class SearchHistory {
  static getAll = () => {
    return BaseModel.getAll(SearchHistory.name);
  }

  static create = (name) => {
    BaseModel.create(SearchHistory.name, this.#buildParams(name));
  }

  // private method
  static #buildParams = (name) => {
    return {
      uuid: uuidv4(),
      name: name,
      search_date: Moment().toDate(),
    }
  }
}

export default SearchHistory;