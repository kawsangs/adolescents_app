import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import { mediumFontSize, largeFontSize, xLargeFontSize } from '../../utils/font_size_util';
import uuidv4 from '../../utils/uuidv4_util';
import dateTimeHelper from '../../helpers/date_time_helper';
import {navigationRef} from '../../navigators/app_navigator';
import visitService from '../../services/visit_service';

const NotificationCardItemComponent = (props) => {
  const {t} = useTranslation();
  const [numberOfLines, setNumberOfLines] = React.useState(null)
  const [contentLines, setContentLines] = React.useState(null);

  const renderToggleViewButton = () => {
    return <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', minWidth: 48}}>
              <Text style={{color: color.primaryColor, fontSize: largeFontSize()}}>
                { !numberOfLines ? t('viewLess') : t('viewMore')}
              </Text>
              <Icon name={!numberOfLines ? "chevron-up" : "chevron-down"} size={18} style={{color: color.primaryColor}} />
           </View>
  }

  const renderInfo = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <BoldLabelComponent label={props.notification.title} numberOfLines={2} style={{fontSize: xLargeFontSize(), lineHeight: 28}} />
          <Text style={{fontSize: largeFontSize(), marginTop: 8, lineHeight: 24}} numberOfLines={numberOfLines}
            onTextLayout={(event) => {
              if (!!contentLines) return
              setContentLines(event.nativeEvent.lines.length);
              setNumberOfLines(2);
            }}
          >
            {props.notification.content}
          </Text>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: mediumFontSize(), color: color.grayColor, lineHeight: 22}}>{dateTimeHelper.getTranslatedDate(props.notification.createdAt, t)}</Text>
            { contentLines > 2 && renderToggleViewButton()}
          </View>
        </View>
      </View>
    )
  }

  const renderDeleteAction = () => {
    return (
      <RectButton onPress={() => props.openConfirmModal(props.notification)} style={{backgroundColor: color.redColor, width: '30%', marginTop: 16, justifyContent: 'center', alignItems: 'center', marginLeft: -20}}>
        <Icon name="trash" size={23} style={{color: color.whiteColor, marginLeft: 20}} />
        <Text style={[{color: color.whiteColor, fontSize: largeFontSize(),  marginLeft: 20}]}>{t('delete')}</Text>
      </RectButton>
    )
  }

  const onPressItem = () => {
    const data = !!props.notification.data ? JSON.parse(props.notification.data) : null;
    if (!!data && !!data.topic_id) {
      const data = JSON.parse(props.notification.data)
      const visitParams = {
        pageable_type: 'MobileNotification',
        pageable_id: props.notification.id,
        code: 'open_in_app_notification',
        name: 'Open in-app notification',
        parent_code: null,
      };
      visitService.recordVisitAction(visitParams);
      navigationRef.current?.navigate('SurveyView', { uuid: props.notification.uuid, topic_id: data.topic_id, title: props.notification.title });
      return;
    }
    setNumberOfLines(!numberOfLines ? 2 : null)
  }

  return (
    <Swipeable renderRightActions={renderDeleteAction} key={uuidv4()}>
      <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
        onPress={() => onPressItem()}
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