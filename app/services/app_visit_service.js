import Visit from '../models/Visit';
import visitService from './visit_service';
import {APP_VISIT, pageable_types} from '../constants/visit_constant';

const appVisitService = (() => {
  return {
    recordVisit,
    updateAppVisitsWithoutUser,
  }

  function recordVisit() {
    const data = {
      code: APP_VISIT,
      name: "App visit",
      parent_code: null,
      pageable_type: pageable_types.page
    }
    visitService.recordVisitAction(data);
  }

  function updateAppVisitsWithoutUser(userUuid) {
    Visit.getAppVisitsWithoutUser().map(appVisit => {
      Visit.update(appVisit.uuid, { user_uuid: userUuid });
    });
  }
})();

export default appVisitService;