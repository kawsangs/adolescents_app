import {Linking} from 'react-native';
import toastMessageHelper from './toast_message_helper';

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

  function viewRoute(latitude, longitude, errorMessage) {
    if (!latitude || !longitude) return;

    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported)
          Linking.openURL(url);
        else
          toastMessageHelper.showMessage(errorMessage);
      })
      .catch(() => toastMessageHelper.showMessage(errorMessage));
  }
})();

export default mapHelper;