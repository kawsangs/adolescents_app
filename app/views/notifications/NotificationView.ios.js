import React, { useEffect, useState } from 'react';
import {FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';

import Notification from '../../models/Notification';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NotificationCardItemComponent from '../../components/notifications/NotificationCardItemComponent';
import { useDispatch } from 'react-redux';
import { resetNotification } from '../../features/notifications/unreadNotificationsSlice';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import ComingSoonMessageComponent from '../../components/shared/ComingSoonMessageComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {gradientScrollViewPaddingBottom} from '../../constants/ios_component_constant';

const STEP = 20

const NavigationView = (props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(STEP);
  const firstRecord = Notification.firstRecord();
  const [notifications, setNotifications] = useState(Notification.getAll().slice(0, currentIndex));

  useEffect(() => {
    Notification.setAllAsRead();
    dispatch(resetNotification());
  }, []);


  const renderEmptyContent = () => {
    return (
      <ComingSoonMessageComponent/>
    )
  }

  const onEndReached = () => {
    if (notifications[notifications.length - 1].uuid == firstRecord.uuid)
      return;

    const nextNotifications = Notification.getAll().slice(currentIndex + 1, currentIndex + STEP)
    setNotifications([...notifications, ...nextNotifications]);
    setCurrentIndex(currentIndex + STEP)
  }

  const renderBody = () => {
    if (notifications.length) {
      return (
        <FlatList
          data={notifications}
          renderItem={({item}) => <NotificationCardItemComponent notification={item}/>}
          keyExtractor={item => item.uuid}
          contentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingBottom: gradientScrollViewPaddingBottom}}
          onEndReached={() => onEndReached()}
          onEndReachedThreshold={0.3}
          ListFooterComponentStyle={{paddingBottom: 300}}
        />
      )
    }

    return renderEmptyContent();
  }

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={t('notification')} />}
      body={renderBody()}
      isNotScrollView={true}
    />
  )
}

export default NavigationView;
