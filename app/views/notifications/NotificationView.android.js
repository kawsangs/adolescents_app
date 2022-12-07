import React, { useEffect } from 'react';
import {useTranslation} from 'react-i18next';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';

import Notification from '../../models/Notification';

import NotificationCardItemComponent from '../../components/notifications/NotificationCardItemComponent';
import {View, Text, Image} from 'react-native';
import { xxLargeFontSize } from '../../utils/font_size_util';
import { useDispatch } from 'react-redux';
import { resetNotification } from '../../features/notifications/unreadNotificationsSlice';
import ComingSoonMessageComponent from '../../components/shared/ComingSoonMessageComponent';

const NavigationView = (props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const notifications = Notification.getAll().slice(0, 20);

  useEffect(() => {
    Notification.setAllAsRead();
    dispatch(resetNotification());
  }, []);


  const renderEmptyContent = () => {
    return (
      <ComingSoonMessageComponent/>
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
