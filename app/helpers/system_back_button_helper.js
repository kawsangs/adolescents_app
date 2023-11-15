import { BackHandler } from "react-native";
import {navigationRef} from '../navigators/app_navigator';
import toastMessageHelper from './toast_message_helper';

const HOME = 'homeview';
const LOGIN = 'loginselectionview';
const INTRO = 'introductionview';

const systemBackButtonHelper = (() => {
  return {
    handleBackToExitApp,
  }

  function handleBackToExitApp(message) {
    let lastPress = null;
    let isToastVisible = false;

    return BackHandler.addEventListener('hardwareBackPress', () => {
      const currentScreen = navigationRef.current?.getCurrentRoute().name.toLowerCase();

      if (currentScreen != HOME && currentScreen != LOGIN && currentScreen != INTRO)
        return false;

      const now = Date.now();
      const DOUBLE_PRESS_DELAY = 700;

      if (lastPress && (now - lastPress) < DOUBLE_PRESS_DELAY)
        return false;
      else if (!isToastVisible) {
        toastMessageHelper.showMessage(message);
        isToastVisible = true;
        setTimeout(() => {
          isToastVisible = false;
        }, 2500);
      }

      lastPress = now;
      return true;
    });
  }
})();

export default systemBackButtonHelper;
