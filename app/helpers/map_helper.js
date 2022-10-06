import {Linking, Platform} from 'react-native';

const mapHelper = (() => {
  return {
    getMarkers,
    viewRoute,
  }

  function getMarkers(locations) {
    const markers = [];
    locations.map(location => {
      markers.push({latitude: location.latitude, longitude: location.longitude, title: location.name});
    });

    return markers;
  }

  function viewRoute(latitude, longitude, name) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported)
          Linking.openURL(url);
        else
          console.log('This URL is not support with this platform')
      })
      .catch(() => {
        console.log('Unable to open this URL');
      });
  }
})();

export default mapHelper;