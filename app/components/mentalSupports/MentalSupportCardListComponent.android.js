import React, {useRef, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

import MentalSupportCardComponent from './MentalSupportCardComponent';
import CustomFlatListComponent from '../shared/CustomFlatListComponent';
import Contact from '../../models/Contact';
import {screenHorizontalPadding} from '../../constants/component_constant';
import { gradientScrollViewBigPaddingBottom } from '../../constants/ios_component_constant';
import contactService from '../../services/contact_service';

const MentalSupportCardListComponent = () => {
  const listRef = useRef();
  const [hasInternet, setHasInternet] = useState(true);
  const [contacts, setContacts] = useState(Contact.getAll());

  useEffect(() => {
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (hasInternet != state.isInternetReachable)
        setHasInternet(state.isInternetReachable);
    });

    return () => { unsubscribeNetInfo && unsubscribeNetInfo() }
  }, []);

  const onRefresh = () => {
    contactService.syncAll(() => {
      setContacts(Contact.getAll());
      listRef.current?.stopRefreshLoading()
    }, () => listRef.current?.stopRefreshLoading());
  }

  const renderItem = (contact) => {
    return <MentalSupportCardComponent name={contact.name} intend={contact.intend} channel={contact.channel} errorMessage={contact.errorMessage} />
  }

  return <CustomFlatListComponent
            ref={listRef}
            data={contacts}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item.uuid}
            hasInternet={hasInternet}
            refreshingAction={() => onRefresh()}
            customContentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingBottom: gradientScrollViewBigPaddingBottom, paddingTop: 8}}
            hideFooterLoading={true}
         />
}

export default MentalSupportCardListComponent;