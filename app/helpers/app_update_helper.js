import SpInAppUpdates from 'sp-react-native-in-app-updates';

import AppUpdateBottomSheetComponent from '../components/appUpdateBottomSheets/AppUpdateBottomSheetComponent';
import asyncStorageService from '../services/async_storage_service';
import { HAS_SHOWN_APP_UPDATE } from '../constants/async_storage_constant';

const appUpdateHelper = (() => {
  return {
    checkForUpdate
  }

  async function checkForUpdate(bottomSheetRef, modalRef) {
    const hasShownAppUpdate = await asyncStorageService.getItem(HAS_SHOWN_APP_UPDATE);
    if (!!hasShownAppUpdate) return;

    const inAppUpdates = new SpInAppUpdates();
    inAppUpdates.checkNeedsUpdate().then(result => {
      if (result.shouldUpdate) {
        bottomSheetRef.current?.setBodyContent(<AppUpdateBottomSheetComponent/>);
        modalRef.current?.present();
        asyncStorageService.setItem(HAS_SHOWN_APP_UPDATE, 'true');
      }
    });
  }
})();

export default appUpdateHelper;