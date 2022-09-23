import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {screenHorizontalPadding} from '../../constants/component_constant';
import geolocationService from '../../services/geolocation_service';

const CurrentLocationButtonComponent = (props) => {
  const getCurrentLocation = () => {
    geolocationService.getCurrentLocation((positions) => props.updatePosition(positions));
  }

  return (
    <TouchableOpacity onPress={() => getCurrentLocation()} style={styles.btn}>
      <Icon name="navigation" size={22} color={color.whiteColor} style={{marginTop: 4, marginRight: 4}} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: color.primaryColor,
    borderRadius: 40,
    justifyContent: 'center',
    marginRight: screenHorizontalPadding,
    marginBottom: 16,
    height: componentUtil.pressableItemSize(8),
    width: componentUtil.pressableItemSize(8),
  }
});

export default CurrentLocationButtonComponent;