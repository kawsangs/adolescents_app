'use strict';

const SearchHistorySchema = {
  name: 'SearchHistory',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    name: 'string',
    search_date: 'date'
  }
}

export default SearchHistorySchema;