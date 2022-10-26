import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import color from '../../themes/color';

import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import {isShortScreenDevice} from '../../utils/responsive_util';
import {navigationRef} from '../../navigators/app_navigator';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import ImageComponent from '../shared/ImageComponent';
import { mediumFontSize, largeFontSize, xLargeFontSize } from '../../utils/font_size_util';
import Moment from 'moment';

const NotificationCardItemComponent = (props) => {
  const renderInfo = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <ImageComponent source={require('../../assets/images/logo_color.png')} resizeMode="cover" imageStyle={styles.image} emptyStyle={styles.emptyView} />

        <View>
          <BoldLabelComponent label={props.notification.title} numberOfLines={2} style={{fontSize: xLargeFontSize()}} />
          <Text style={{fontSize: mediumFontSize()}}>{Moment(props.notification.createdAt).calendar()}</Text>
          <Text style={{fontSize: largeFontSize(), marginTop: 10}}>{props.notification.content}</Text>
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
    marginTop: 11,
    padding: 16
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