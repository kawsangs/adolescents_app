import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import { screenHorizontalPadding, descriptionFontSize } from '../../constants/component_constant';
import {PHONE, WEBSITE} from '../../constants/contact_constant';
import translationHelper from '../../helpers/translation_helper';
import contactHelper from '../../helpers/contact_helper';

const FacililityDetailContactBottomSheetItemComponent = (props) => {
  const {i18n} = useTranslation();
  const renderIcon = () => {
    return props.type == WEBSITE ? <FeatherIcon name={props.icon} size={24} color={color.primaryColor} />
                                 : <FontAwesome name={props.icon} size={24} color={color.primaryColor} />
  }

  return (
    <React.Fragment>
      <TouchableOpacity onPress={() => contactHelper.openContactLink(props.type, props.item)} style={styles.container}>
        {renderIcon()}
        <Text style={styles.label} numberOfLines={2}>
          { props.type == PHONE ? translationHelper.translateNumber(props.item, i18n.language) : props.item}
        </Text>
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
    color: color.primaryColor,
    fontSize: descriptionFontSize,
    marginLeft: 32,
    marginRight: 10,
  }
});

export default FacililityDetailContactBottomSheetItemComponent;