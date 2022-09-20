import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {largeFontSize} from '../../utils/font_size_util';

const ClinicCardViewMapButtonComponent = () => {
  return <TouchableOpacity style={styles.viewMapBtn}>
            <FontAwesome name='route' light size={18} color={color.primaryColor} />
            <BoldLabelComponent label='បង្ហាញផ្លូវ' style={styles.viewMapLabel} />
          </TouchableOpacity>
}

const styles = StyleSheet.create({
  viewMapBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: componentUtil.pressableItemSize(),
  },
  viewMapLabel: {
    color: color.primaryColor,
    fontSize: largeFontSize(),
    marginLeft: 12
  }
});

export default ClinicCardViewMapButtonComponent;