import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import AlertModalComponent from '../../components/shared/AlertModalComponent';
import NotificationMainComponent from '../../components/notifications/NotificationMainComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import { resetNotification } from '../../features/notifications/unreadNotificationsSlice';
import color from '../../themes/color';
import Notification from '../../models/Notification';
import SurveyForm from '../../models/SurveyForm';
import {largeFontSize} from '../../utils/font_size_util';

const STEP = 20

const NotificationView = (props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(STEP);
  const firstRecord = Notification.firstRecord();
  const [notifications, setNotifications] = useState(Notification.getAll().slice(0, currentIndex));
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    Notification.setAllAsRead();
    dispatch(resetNotification());
  }, []);

  const onEndReached = () => {
    if (notifications[notifications.length - 1].uuid == firstRecord.uuid)
      return;

    const nextNotifications = Notification.getAll().slice(currentIndex + 1, currentIndex + STEP)
    setNotifications([...notifications, ...nextNotifications]);
    setCurrentIndex(currentIndex + STEP)
  }

  const openConfirmModal = (notification) => {
    setSelectedNotification(notification);
    setModalVisible(true);
  }

  const renderBody = () => {
    return <NotificationMainComponent
              notifications={notifications}
              updateNotifications={(notifications) => setNotifications(notifications)}
              onEndReached={() => onEndReached()}
              openConfirmModal={(notification) => openConfirmModal(notification)}
           />
  }

  const confirmMessage = () => {
    return <View style={{flexDirection: "row"}}>
              <Icon name="exclamation" size={22} color={color.secondaryColor} />
              <Text style={{fontSize: largeFontSize(), marginLeft: 16}}>{t('doYouWantToDeleteThisNotification')}</Text>
           </View>
  }

  const deleteNotification = () => {
    setNotifications(notifications.filter(notification => notification.uuid != selectedNotification.uuid))
    if (!!selectedNotification.data) {
      const data = JSON.parse(selectedNotification.data)
      if (!!data && data.topic_id)
        SurveyForm.deleteByIdWithDependency(data.topic_id);
    }
    Notification.deleteByUuid(selectedNotification.uuid);
    setSelectedNotification(null);
    setModalVisible(false);
  }

  return (
    <React.Fragment>
      <GradientScrollViewComponent
        header={<NavigationHeaderWithBackButtonComponent label={t('notification')} />}
        body={renderBody()}
        isNotScrollView={true}
      />
      <AlertModalComponent
        visible={modalVisible}
        message={confirmMessage}
        onDismiss={() => {setModalVisible(false); setSelectedNotification(null)}}
        onConfirm={() => deleteNotification()}
        leftButtonLabel={t('close')}
        rightButtonLabel={t('ok')}
      />
    </React.Fragment>
  )
}

export default NotificationView;