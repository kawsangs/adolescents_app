import React from 'react';
import {FlatList} from 'react-native';

import NotificationCardItemComponent from './NotificationCardItemComponent';
import ComingSoonMessageComponent from '../shared/ComingSoonMessageComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {gradientScrollViewPaddingBottom} from '../../constants/ios_component_constant';

const NotificationMainComponent = (props) => {
  const renderEmptyContent = () => {
    return (
      <ComingSoonMessageComponent/>
    )
  }

  if (props.notifications.length) {
    return (
      <FlatList
        data={props.notifications}
        renderItem={({item}) => <NotificationCardItemComponent notification={item} openConfirmModal={(notification) => props.openConfirmModal(notification)} />}
        keyExtractor={item => item.uuid}
        contentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingBottom: gradientScrollViewPaddingBottom}}
        onEndReached={() => props.onEndReached()}
        onEndReachedThreshold={0.3}
        ListFooterComponentStyle={{paddingBottom: 300}}
      />
    )
  }

  return renderEmptyContent();
}

export default NotificationMainComponent;