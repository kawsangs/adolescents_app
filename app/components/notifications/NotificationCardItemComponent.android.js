import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {Card} from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import ImageComponent from '../shared/ImageComponent';
import { mediumFontSize, largeFontSize, xLargeFontSize } from '../../utils/font_size_util';
import dateTimeHelper from '../../helpers/date_time_helper';

const NotificationCardItemComponent = (props) => {
  const {i18n, t} = useTranslation();
  let itemRef = null;

  const renderInfo = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <ImageComponent source={require('../../assets/images/logo_color.png')} resizeMode="cover" imageStyle={styles.image} emptyStyle={styles.emptyView} />

        <View style={{flex: 1}}>
          <BoldLabelComponent label={props.notification.title} numberOfLines={2} style={{fontSize: xLargeFontSize(), lineHeight: 28}} />
          <Text style={{fontSize: largeFontSize(), marginTop: 8, lineHeight: 24}}>{props.notification.content}</Text>
          <Text style={{fontSize: mediumFontSize(), textAlign: 'right', color: color.grayColor, lineHeight: 22}}>{dateTimeHelper.getTranslatedDate(props.notification.createdAt, i18n.language)}</Text>
        </View>
      </View>
    )
  }

  const renderDeleteAction = () => {
    return (
      <RectButton onPress={() => props.openConfirmModal(props.notification)} style={{backgroundColor: color.redColor, width: '30%', marginTop: 16, justifyContent: 'center', alignItems: 'center', marginLeft: -20}}>
        <Text style={[{color: color.whiteColor, fontSize: xLargeFontSize(),  marginLeft: 20}]}>{t('delete')}</Text>
      </RectButton>
    )
  }

  return (
    <Swipeable
      ref={ref => { itemRef = ref }}
      renderRightActions={renderDeleteAction}
    >
      <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
        onPress={()=>{}}
      >
        { renderInfo() }
      </Card>
    </Swipeable>
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