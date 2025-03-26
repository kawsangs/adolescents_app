import React from 'react';
import {TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {largeFontSize} from '../../utils/font_size_util';

const DrawerNavigatorItemComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  return (
    <TouchableOpacity onPress={() => props.onPress()}
      style={[{flexDirection: 'row', alignItems: 'center', height: componentUtil.mediumPressableItemSize()}, props.style]}
      accessibilityLabel={props.accessibilityLabel}
    >
      <BoldLabelComponent label={props.label} style={{color: appTheme.primary_text_color ?? color.whiteColor, flex: 1, fontSize: largeFontSize()}} />
      <FeatherIcon name={props.iconName} color={appTheme.primary_text_color ?? color.whiteColor} size={20} style={{marginTop: -2}} />
    </TouchableOpacity>
  )
}

export default DrawerNavigatorItemComponent;