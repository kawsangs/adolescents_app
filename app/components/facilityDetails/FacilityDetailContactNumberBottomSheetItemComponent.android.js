import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {xLargeFontSize} from '../../utils/font_size_util';
import { screenHorizontalPadding } from '../../constants/component_constant';
import {PHONE} from '../../constants/contact_constant';
import translationHelper from '../../helpers/translation_helper';
import contactHelper from '../../helpers/contact_helper';

const FacililityDetailContactNumberBottomSheetItemComponent = (props) => {
  const {i18n} = useTranslation();
  return (
    <React.Fragment>
      <TouchableOpacity onPress={() => contactHelper.openContactLink(PHONE, props.number)} style={styles.container}>
        <FontAwesome name="phone" size={24} color={color.primaryColor} />
        <Text style={styles.label}>{translationHelper.translateNumber(props.number, i18n.language)}</Text>
      </TouchableOpacity>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: componentUtil.mediumPressableItemSize(),
    paddingHorizontal: screenHorizontalPadding,
  },
  label: {
    marginLeft: 32,
    fontSize: xLargeFontSize()
  }
});

export default FacililityDetailContactNumberBottomSheetItemComponent;