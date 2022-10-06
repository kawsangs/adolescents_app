import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import MapComponent from '../../components/shared/MapComponent';
import NavigationHeaderBackButtonComponent from '../../components/shared/NavigationHeaderBackButtonComponent';
import color from '../../themes/color';
import mapHelper from '../../helpers/map_helper';
import componentUtil from '../../utils/component_util';
import Facility from '../../models/Facility';

const FacilityMapView = (props) => {
  const facility = Facility.findByUuid(props.route.params.uuid);
  const initRegion = {latitude: parseFloat(facility.latitude), longitude: parseFloat(facility.longitude)};
  const [region, setRegion] = useState(initRegion);
  const markers = mapHelper.getMarkers([{latitude: parseFloat(facility.latitude), longitude: parseFloat(facility.longitude), name: facility.name}]);

  return (
    <View style={{flexGrow: 1}}>
      <NavigationHeaderBackButtonComponent iconColor={color.blackColor} buttonStyle={styles.backButton} iconStyle={{marginLeft: -4}} />
      <MapComponent initRegion={initRegion} currentRegion={region} markers={markers} autoShowMarkerTitle={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 56,
    marginTop: 6,
    marginLeft: 6,
    paddingLeft: 0,
    height: componentUtil.mediumPressableItemSize(),
    width: componentUtil.mediumPressableItemSize(),
    zIndex: 1,
  }
})

export default FacilityMapView;