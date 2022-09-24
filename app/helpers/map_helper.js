const mapHelper = (() => {
  return {
    getMarkers
  }

  function getMarkers(locations) {
    const markers = [];
    locations.map(location => {
      markers.push({latitude: location.latitude, longitude: location.longitude, title: location.name});
    });

    return markers;
  }
})();

export default mapHelper;