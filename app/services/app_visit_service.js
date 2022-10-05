import Visit from '../models/Visit';
import visitService from './visit_service';
import {APP_VISIT} from '../constants/visit_constant';

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
    }
    visitService.recordVisitAction(data);
  }

  function updateAppVisitsWithoutUser(userUuid) {
    const visit = new Visit();
    visit.getAppVisitsWithoutUser().map(appVisit => {
      visit.update(appVisit.uuid, { user_uuid: userUuid });
    });
  }
})();

export default appVisitService;