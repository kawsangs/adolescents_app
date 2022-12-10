import React from 'react';
import {FlatList} from 'react-native';

import NotificationCardItemComponent from './NotificationCardItemComponent';
import NotificationEmptyListComponent from './NotificationEmptyListComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {gradientScrollViewBigPaddingBottom} from '../../constants/ios_component_constant';

const NotificationMainComponent = (props) => {
  if (props.notifications.length) {
    return (
      <FlatList
        data={props.notifications}
        renderItem={({item}) => <NotificationCardItemComponent notification={item} openConfirmModal={(notification) => props.openConfirmModal(notification)} />}
        keyExtractor={item => item.uuid}
        contentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingBottom: gradientScrollViewBigPaddingBottom}}
        onEndReached={() => props.onEndReached()}
        onEndReachedThreshold={0.3}
        ListFooterComponentStyle={{paddingBottom: 300}}
      />
    )
  }

  return <NotificationEmptyListComponent/>
}

export default NotificationMainComponent;