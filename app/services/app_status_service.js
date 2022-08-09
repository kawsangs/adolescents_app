import AsyncStorage from '@react-native-async-storage/async-storage';

const FIRST_TIME_LAUNCH = 'FIRST_TIME_LAUNCH';

const appStatusService = (() => {
  return {
    handleAppLaunchingStatus,
    isFirstTimeLaunch,
  }

  async function handleAppLaunchingStatus() {
    if (await isFirstTimeLaunch())
      AsyncStorage.setItem(FIRST_TIME_LAUNCH, 'false');
  }

  async function isFirstTimeLaunch() {
    const isFirstTimeLaunch = await AsyncStorage.getItem(FIRST_TIME_LAUNCH);
    return !!isFirstTimeLaunch ? JSON.parse(isFirstTimeLaunch) : true;
  }
})();

export default appStatusService;