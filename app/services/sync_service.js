import appUserService from './app_user_service';
import visitService from './visit_service';
import surveyService from './survey_service';
import themeUsageService from './theme_usage_service';

const syncService = (() => {
  return {
    syncUsersAndDependencies,
  }

  function syncUsersAndDependencies() {
    appUserService.syncUsers(() => {
      visitService.syncVisits();
      surveyService.syncSurveys();
      themeUsageService.syncThemeUsages();
    });
  }
})();

export default syncService;