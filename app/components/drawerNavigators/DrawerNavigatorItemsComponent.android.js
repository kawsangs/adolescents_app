import React from 'react';
import {View, Linking} from 'react-native';
import {useTranslation} from 'react-i18next';

import DrawerNavigatorItemComponent from './DrawerNavigatorItemComponent';
import {isLowPixelDensityDevice, getStyleOfDevice} from '../../utils/responsive_util';
import navigationService from '../../services/navigation_service';

const SCREEN = 'sc';
const LINK = 'li';
const SHARE = 'sh';
const LOG_OUT = 'lo';

const DrawerNavigatorItemsComponent = (props) => {
  const {t} = useTranslation();
  const renderItems = () => {
    const items = {
      first: [
        {label: t('about'), icon: 'info', url: 'AboutUsView', type: SCREEN},
        {label: t('privacyPolicy'), icon: 'shield', url: 'http://youthhealth.childhelplinecambodia.org/privacy-policy', type: LINK},
        {label: t('termsAndConditions'), icon: 'file-text', url: 'https://youthhealth.childhelplinecambodia.org/terms-and-conditions', type: LINK},
      ],
      second: [
        {label: t('share'), icon: 'share-2', url: '', type: SHARE},
        {label: t('reset'), icon: 'rotate-ccw', url: '', type: LOG_OUT},
      ]
    }
    const mobileMarginTop = isLowPixelDensityDevice() ? 16 : 34;
    const listItems = [];
    for (const key in items) {
      listItems.push(
        <View key={`container-${key}`} style={{marginTop: getStyleOfDevice(40, mobileMarginTop)}}>
          { items[key].map((item, index) => {
              return <DrawerNavigatorItemComponent key={`item-${index}`} label={item.label} iconName={item.icon} onPress={() => onPress(item.url, item.type)}/>
            })
          }
        </View>
      )
    }

    return listItems;
  }

  const onPress = (url, type) => {
    if (type == LOG_OUT)
      return navigationService.logOut();
    else if (type == LINK)
      return Linking.openURL(url)

    !!url && props.navigation.navigate(url);
  }

  return (
    <View style={{marginTop: 40}}>
      <DrawerNavigatorItemComponent label="កែប្រែអត្តសញ្ញាណ" iconName="edit"/>
      {renderItems()}
    </View>
  )
}

export default DrawerNavigatorItemsComponent;