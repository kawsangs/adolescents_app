import appUserService from './app_user_service';
import visitService from './visit_service';

const syncService = (() => {
  return {
    syncUsersAndVisits,
  }

  function syncUsersAndVisits() {
    appUserService.updateSyncedUserDeviceId();
    appUserService.syncUsers(() => visitService.syncVisits());
  }
})();

export default syncService;