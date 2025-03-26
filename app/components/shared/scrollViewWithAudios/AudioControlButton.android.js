import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

import color from '../../../themes/color';
import componentUtil from '../../../utils/component_util';
import { getStyleOfDevice } from '../../../utils/responsive_util';

const AudioControlButton = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  return <TouchableOpacity onPress={() => !!props.onPress && props.onPress()} style={styles.button}>
            <Icon name={props.iconName} size={props.size} color={appTheme.primary_text_color ?? color.whiteColor} />
         </TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    minWidth: componentUtil.largePressableItemSize(),
    minHeight: componentUtil.largePressableItemSize(),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: componentUtil.pressableItemSize() - getStyleOfDevice(15, 20),
  }
});

export default AudioControlButton;