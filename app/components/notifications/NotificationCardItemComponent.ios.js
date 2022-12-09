import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import ImageComponent from '../shared/ImageComponent';
import { mediumFontSize, largeFontSize, xLargeFontSize } from '../../utils/font_size_util';
import dateTimeHelper from '../../helpers/date_time_helper';

const NotificationCardItemComponent = (props) => {
  const {i18n} = useTranslation();

  const renderInfo = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <ImageComponent source={require('../../assets/images/logo_color.png')} resizeMode="cover" imageStyle={styles.image} emptyStyle={styles.emptyView} />

        <View style={{flex: 1}}>
          <BoldLabelComponent label={props.notification.title} numberOfLines={2} style={{fontSize: xLargeFontSize()}} />
          <Text style={{fontSize: largeFontSize(), marginTop: 8}}>{props.notification.content}</Text>
          <Text style={{fontSize: mediumFontSize(), textAlign: 'right', color: color.grayColor}}>{dateTimeHelper.getTranslatedDate(props.notification.createdAt, i18n.language)}</Text>
        </View>
      </View>
    )
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={()=>{}}>
      { renderInfo() }
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: cardBorderRadius,
    marginTop: 16,
    padding: 16,
    paddingBottom: 12
  },
  image: {
    borderTopLeftRadius: cardBorderRadius,
    borderBottomLeftRadius: cardBorderRadius,
    width: 24,
    height: 24,
    marginRight: 12
  },
  emptyView: {
    borderTopLeftRadius: cardBorderRadius,
    borderBottomLeftRadius: cardBorderRadius,
  }
});

export default NotificationCardItemComponent;