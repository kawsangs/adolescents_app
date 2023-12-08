import React, { useEffect } from 'react';
import SpInAppUpdates, {
  NeedsUpdateResponse,
  IAUUpdateKind,
  StartUpdateOptions,
} from 'sp-react-native-in-app-updates';

const useInAppUpdate = () => {
  useEffect(() => {
    const inAppUpdates = new SpInAppUpdates();

    // curVersion is optional if you don't provide it will automatically take from the app using react-native-device-info
    inAppUpdates.checkNeedsUpdate().then((result) => {
      if (result.shouldUpdate) {
        const updateOptions = Platform.select({
          ios: {
            title: 'Update available',
            message: "There is a new version of the app available on the App Store, do you want to update it?",
            buttonUpgradeText: 'Update',
            buttonCancelText: 'Cancel',
          },
          android: {
            updateType: IAUUpdateKind.FLEXIBLE,
          },
        });
        inAppUpdates.startUpdate(updateOptions);
      }
    });
  }, []);
}

export default useInAppUpdate;
