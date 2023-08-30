import React from 'react';
import {StyleSheet} from 'react-native';
import {View, TouchableOpacity} from 'react-native';

import BoldLabelComponent from '../BoldLabelComponent';
import color from '../../../themes/color';
import {largeFontSize} from '../../../utils/font_size_util';
import componentUtil from '../../../utils/component_util';

const AlertModalConfirmationButtonsComponent = (props) => {
  const renderButton = (label, onPress, style, labelStyle) => {
    return <TouchableOpacity onPress={() => onPress()} style={[styles.btn, props.isOutlineButton && styles.outline, style]}>
              <BoldLabelComponent label={label} style={[{fontSize: largeFontSize(), color: color.primaryColor}, labelStyle]} />
           </TouchableOpacity>
  }

  return <View style={styles.container}>
            { !!props.leftButtonLabel && renderButton(props.leftButtonLabel, props.onCancel, {...props.leftButtonStyle, marginRight: 22}, props.leftButtonLabelStyle)}
            { !!props.rightButtonLabel && renderButton(props.rightButtonLabel, props.onConfirm, props.rightButtonStyle, props.rightButtonLabelStyle)}
          </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 14,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: componentUtil.mediumPressableItemSize(),
    minWidth: componentUtil.mediumPressableItemSize(),
  },
  outline: {
    borderWidth: 1,
    borderColor: color.primaryColor,
    borderRadius: 6,
    marginBottom: 14,
    marginTop: 12,
    width: 80,
  }
});

export default AlertModalConfirmationButtonsComponent;