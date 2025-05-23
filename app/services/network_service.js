import NetInfo from '@react-native-community/netinfo';

const networkService = (() => {
  return {
    checkConnection,
  }

  function checkConnection(onlineCallback, offlineCallback) {
    NetInfo.fetch().then(state => {
      if (state.isConnected && state.isInternetReachable) {
        !!onlineCallback && onlineCallback();
        return;
      }

      !!offlineCallback && offlineCallback();
    });
  }
})();

export default networkService;