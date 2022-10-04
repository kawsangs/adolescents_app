import React, {useEffect} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import mapStyles from '../../themes/mapStyles';
import color from '../../themes/color';

const MapComponent = (props) => {
  const _map = React.useRef(null)
  const renderMarkers = () => {
    return props.markers.map((marker, index) => {
      return <Marker key={index} coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                pinColor={color.redColor} title={marker.title}
              />
    });
  }

  useEffect(() => {
    _map.current?.animateToRegion({
      latitude: props.region.latitude,
      longitude: props.region.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0022,
    }, 1000)
  }, [props.region]);

  return (
    <MapView
      ref={_map}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{position: 'absolute', width: '100%', height: '100%'}}
      initialRegion={{
        latitude: 11.5412878,
        longitude: 104.9282886,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0022,
      }}
      showsCompass={false}
      showsUserLocation={true}
      showsMyLocationButton={false}
      customMapStyle={mapStyles}
    >
      {renderMarkers()}
    </MapView>
  )
}

export default MapComponent;