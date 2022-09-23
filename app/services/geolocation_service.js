import Geolocation from '@react-native-community/geolocation';

const geolocationService = (() => {
  return {
    getCurrentLocation
  }

  function getCurrentLocation(callback) {
    Geolocation.getCurrentPosition((positions) => {
      console.log('current positions = ', positions);
      callback(positions.coords);
    }, (error) => {
      console.log('get current position error = ', error);
    });
  }
})();

export default geolocationService;