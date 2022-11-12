import {Linking} from 'react-native';
import toastMessageHelper from './toast_message_helper';

const mapHelper = (() => {
  return {
    getMarkers,
    viewRoute,
    getInitLatLng,
  }

  function getMarkers(locations) {
    const markers = [];
    locations.map(location => {
      if (!!location.latitude && !!location.longitude)
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

  function getInitLatLng(facilities, regionOffset) {
    for (let i = 0; i < facilities.length; i++) {
      if (facilities[i].latitude != null && facilities[i].longitude != null)
        return {latitude: parseFloat(facilities[i].latitude) - regionOffset, longitude: parseFloat(facilities[i].longitude)}
    }

    return null;
  }
})();

export default mapHelper;