import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import mapStyles from '../../assets/stylesheets/shared/mapStyles';
import color from '../../themes/color';

const MapComponent = (props) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{position: 'absolute', width: '100%', height: '100%'}}
      region={{
        latitude: props.region.latitude,
        longitude: props.region.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0022,
      }}
      showsCompass={false}
      showsUserLocation={true}
      customMapStyle={mapStyles}
    >
      <Marker coordinate={{ latitude: props.marker.latitude, longitude: props.marker.longitude }}
        pinColor={color.redColor} title={props.marker.title}
      />
    </MapView>
  )
}

export default MapComponent;