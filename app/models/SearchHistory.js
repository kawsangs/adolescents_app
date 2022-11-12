import Moment from 'moment';
import BaseModel from './BaseModel';
import uuidv4 from '../utils/uuidv4_util'

class SearchHistory {
  static getAll = () => {
    return BaseModel.getAll(SearchHistory.name).sorted("search_date", true);
  }

  static upsert = (name) => {
    const searchHistory = this.findByName(name)[0];
    if (!!searchHistory)
      BaseModel.update(SearchHistory.name, searchHistory.uuid, { search_date: Moment().toDate() });
    else
      BaseModel.create(SearchHistory.name, this.#buildParams(name));
    
    // Delete the last search when the search history reach 8
    const searchHistories = this.getAll();
    if (searchHistories.length > 8)
      BaseModel.deleteByUuid(SearchHistory.name, searchHistories[searchHistories.length - 1].uuid)
  }

  static findByName = (name) => {
    return BaseModel.findByAttr(SearchHistory.name, { name: `'${name}'` });
  }

  static deleteAll = () => {
    BaseModel.deleteAll(SearchHistory.name);
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