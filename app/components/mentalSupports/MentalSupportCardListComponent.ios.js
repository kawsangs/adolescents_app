import React, {useRef, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {Text, Snackbar} from 'react-native-paper';

import MentalSupportCardComponent from './MentalSupportCardComponent';
import CustomFlatListComponent from '../shared/CustomFlatListComponent';
import Contact from '../../models/Contact';
import {screenHorizontalPadding} from '../../constants/component_constant';
import { gradientScrollViewBigPaddingBottom } from '../../constants/ios_component_constant';
import contactService from '../../services/contact_service';
import color from '../../themes/color';

const MentalSupportCardListComponent = () => {
  const listRef = useRef();
  const [hasInternet, setHasInternet] = useState(true);
  const [contacts, setContacts] = useState(Contact.getAll());
  const [state, setState] = useState({
    alertVisible: false,
    alertMessage: '',
  });

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
    return <MentalSupportCardComponent name={contact.name} intend={contact.intend} channel={contact.type}
              showAlertMessage={() => setState({ alertVisible: true, alertMessage: contact.errorMessage })}
           />
  }

  return (
    <View>
      <CustomFlatListComponent
        ref={listRef}
        data={contacts}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.uuid}
        hasInternet={hasInternet}
        refreshingAction={() => onRefresh()}
        customContentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingBottom: gradientScrollViewBigPaddingBottom, paddingTop: 8}}
        hideFooterLoading={true}
      />
      <Snackbar
        visible={state.alertVisible}
        onDismiss={() => setState({ alertVisible: false, alertMessage: '' })}
        duration={2000}
        style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 10}}
      >
        <Text style={{color: color.whiteColor, lineHeight: 22}}>{ state.alertMessage }</Text>
      </Snackbar>
    </View>
  )
}

export default MentalSupportCardListComponent;