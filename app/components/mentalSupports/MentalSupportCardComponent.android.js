import React from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import {Card, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import ContactIconComponent from '../shared/ContactIconComponent';
import { cardElevation, cardBorderRadius, descriptionFontSize } from '../../constants/component_constant';
import { pageable_types } from '../../constants/visit_constant';
import { PHONE } from '../../constants/contact_constant';
import visitService from '../../services/visit_service';
import toastMessageHelper from '../../helpers/toast_message_helper';
import contactUtil from '../../utils/contact_util';

const MentalSupportCardComponent = (props) => {
  const onPress = () => {
    const channel = contactUtil.getChannel(props.type);
    const visitParams = {
      code: channel,
      name: `${props.name} - ${channel == PHONE ? 'call' : channel}`,
      parent_code: "mental_support",
      pageable_type: pageable_types.page,
    }

    visitService.recordVisitAction(visitParams)
    Linking.openURL(props.intend)
      .catch(() => toastMessageHelper.showMessage(props.errorMessage));
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={styles.card} onPress={() => onPress()}>
      <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
        <View style={{width: 45}}>
          <ContactIconComponent type={contactUtil.getChannel(props.type)} size={40} />
        </View>
        <View style={{paddingLeft: 16, flex: 1}}>
          <Text numberOfLines={2} style={{fontSize: descriptionFontSize}}>{props.name}</Text>
        </View>
        <Icon name="chevron-right" color={color.primaryColor} size={32} style={{paddingRight: 8}} />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: cardBorderRadius,
    height: 80,
    marginTop: 11,
    paddingLeft: 16
  },
});

export default MentalSupportCardComponent;