import appStatusService from '../services/app_status_service';
import { environment } from '../config/environment';

const navigatorUtil = (() => {
  return {
    getInitialRouteName,
  }

  async function getInitialRouteName() {
    // if (environment.showIntroSlider && await appStatusService.isFirstTimeLaunch())
      return 'IntroductionView';

    return 'BottomTabs';
  }
})();

export default navigatorUtil;