import Moment from 'moment';
import BaseModel from './BaseModel';
import uuidv4 from '../utils/uuidv4_util'
import stringUtil from '../utils/string_util';

const MODEL = "SearchHistory"

class SearchHistory {
  static getAll = () => {
    return BaseModel.getAll(MODEL).sorted("search_date", true);
  }

  static upsert = (name) => {
    if (stringUtil.isEmpty(name)) return;

    const searchHistory = this.findByName(name)[0];
    if (!!searchHistory)
      BaseModel.update(MODEL, searchHistory.uuid, { search_date: Moment().toDate() });
    else
      BaseModel.create(MODEL, this.#buildParams(name));
    
    // Delete the last search when the search history reach 8
    const searchHistories = this.getAll();
    if (searchHistories.length > 8)
      BaseModel.deleteByUuid(MODEL, searchHistories[searchHistories.length - 1].uuid)
  }

  static findByName = (name) => {
    return BaseModel.findByAttr(MODEL, { name: `'${name}'` });
  }

  static deleteAll = () => {
    BaseModel.deleteAll(MODEL);
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