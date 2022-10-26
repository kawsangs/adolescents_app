import React, { useEffect } from 'react';
import {useTranslation} from 'react-i18next';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import CardListComponent from '../../components/shared/CardListComponent';

import Notification from '../../models/Notification';

import NotificationCardItemComponent from '../../components/notifications/NotificationCardItemComponent';
import {View, Text, Image} from 'react-native';
import { xxLargeFontSize } from '../../utils/font_size_util';
import { useDispatch } from 'react-redux';
import { refreshNotification } from '../../features/notifications/unreadNotificationsSlice';

const NavigationView = (props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const notifications = Notification.getAll().slice(0, 20);

  useEffect(() => {
    Notification.setAllAsRead();
    dispatch(refreshNotification());
  }, []);


  const renderEmptyContent = () => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={ require('../../assets/images/notification.png') } style={{width: 150, height: 150}} />
        <Text style={{color: '#fff', fontSize: xxLargeFontSize(), marginTop: 10}}> មិនមានដំណឹងថ្មី </Text>
      </View>
    )
  }

  const renderBody = () => {
    if (notifications.length) {
      return notifications.map((notification, index) => {
        return <NotificationCardItemComponent key={index} notification={notification}/>
      });
    }

    return renderEmptyContent();
  }

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={"ការជូនដំណឹង"} />}
      body={renderBody()}
    />
  )
}

export default NavigationView;
