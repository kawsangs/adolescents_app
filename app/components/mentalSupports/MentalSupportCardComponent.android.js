import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import ContactIconComponent from '../shared/ContactIconComponent';
import { cardElevation, cardBorderRadius, descriptionFontSize } from '../../constants/component_constant';
import contactHelper from '../../helpers/contact_helper';

const MentalSupportCardComponent = (props) => {

  const renderIcon = () => {
    return <ContactIconComponent type={props.channel} size={40} />
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={styles.card} onPress={() => contactHelper.openContactLink(props.channel, props.intend)}>
      <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
        {renderIcon()}
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