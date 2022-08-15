import BaseApi from './baseApi';
import UserBasedApi from './userBasedApi';

class ScorecardApi extends BaseApi {
  constructor() {
    const userBasedApi = new UserBasedApi();
    super(userBasedApi, 'scorecards');
  }
}

export default ScorecardApi;