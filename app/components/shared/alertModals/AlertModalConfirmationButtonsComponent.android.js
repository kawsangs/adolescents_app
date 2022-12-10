import React from 'react';
import {StyleSheet} from 'react-native';
import {View, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../BoldLabelComponent';
import color from '../../../themes/color';
import {largeFontSize} from '../../../utils/font_size_util';
import componentUtil from '../../../utils/component_util';

const AlertModalConfirmationButtonsComponent = (props) => {
  const {t} = useTranslation();
  const renderButton = (label, onPress, style) => {
    return <TouchableOpacity onPress={() => onPress()} style={[styles.btn, style]}>
              <BoldLabelComponent label={label} style={{fontSize: largeFontSize(), color: color.primaryColor}} />
           </TouchableOpacity>
  }

  return <View style={styles.container}>
            {renderButton(props.leftButtonLabel, props.onCancel, {marginRight: 22})}
            {renderButton(props.rightButtonLabel, props.onConfirm)}
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
    width: componentUtil.mediumPressableItemSize(),
  }
});

export default AlertModalConfirmationButtonsComponent;