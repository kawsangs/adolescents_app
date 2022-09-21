import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import mapStyles from '../../assets/stylesheets/shared/mapStyles';

const MapComponent = (props) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{position: 'absolute', width: '100%', height: '100%'}}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      customMapStyle={mapStyles}
    >
      <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        pinColor={'red'} title={props.title}
      />
    </MapView>
  )
}

export default MapComponent;