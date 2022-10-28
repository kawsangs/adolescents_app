import React, {useEffect} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import mapStyles from '../../themes/mapStyles';
import color from '../../themes/color';

const MapComponent = (props) => {
  const _map = React.useRef(null);
  const _marker = React.useRef(null);

  const renderMarkers = () => {
    return props.markers.map((marker, index) => {
      return <Marker key={index}
                ref={_marker}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                pinColor={color.redColor} title={marker.title}
              />
    });
  }

  useEffect(() => {
    _map.current?.animateToRegion({
      latitude: props.currentRegion.latitude,
      longitude: props.currentRegion.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0022,
    }, 1000);
  }, [props.currentRegion]);

  return (
    <MapView
      ref={_map}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{position: 'absolute', width: '100%', height: '100%'}}
      region={{
        latitude: props.initRegion.latitude,
        longitude: props.initRegion.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0022,
      }}
      showsCompass={false}
      showsUserLocation={true}
      showsMyLocationButton={false}
      customMapStyle={mapStyles}
      onRegionChangeComplete={() => props.autoShowMarkerTitle && _marker.current?.showCallout()}
    >
      {renderMarkers()}
    </MapView>
  )
}

export default MapComponent;