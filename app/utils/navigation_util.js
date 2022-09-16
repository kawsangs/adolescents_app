import appStatusService from '../services/app_status_service';
import { environment } from '../config/environment';
import User from '../models/User';

const navigationUtil = (() => {
  return {
    getInitialRouteName,
  }

  async function getInitialRouteName() {
    if (environment.showIntroSlider && await appStatusService.isFirstTimeLaunch())
      return 'IntroductionView';

    return !!User.loggedInUser() ? 'DrawerNavigator' : 'LoginSelectionView';
  }
})();

export default navigationUtil;