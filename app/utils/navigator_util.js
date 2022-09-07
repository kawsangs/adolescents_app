import appStatusService from '../services/app_status_service';
import { environment } from '../config/environment';
import appUserHelper from '../helpers/app_user_helper';

const navigatorUtil = (() => {
  return {
    getInitialRouteName,
  }

  async function getInitialRouteName() {
    if (environment.showIntroSlider && await appStatusService.isFirstTimeLaunch())
      return 'IntroductionView';

    // return !!await appUserHelper.currentUser() ? 'BottomTabs' : 'LoginSelectionView';
    return 'LoginSelectionView';
  }
})();

export default navigatorUtil;