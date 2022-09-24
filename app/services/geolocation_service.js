import Geolocation from '@react-native-community/geolocation';

const geolocationService = (() => {
  return {
    getCurrentLocation
  }

  function getCurrentLocation(callback) {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition((positions) => {
      callback(positions.coords);
    });
  }
})();

export default geolocationService;