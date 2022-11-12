import React from 'react';
import {View, Linking, Share} from 'react-native';
import {useTranslation} from 'react-i18next';

import DrawerNavigatorItemComponent from './DrawerNavigatorItemComponent';
import {isLowPixelDensityDevice, getStyleOfDevice} from '../../utils/responsive_util';
import navigationService from '../../services/navigation_service';
import {APP_DOWNLOAD_URL, PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL} from '../../constants/main_constant';

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
        {label: t('privacyPolicy'), icon: 'shield', url: PRIVACY_POLICY_URL, type: LINK},
        {label: t('termsAndConditions'), icon: 'file-text', url: TERMS_AND_CONDITIONS_URL, type: LINK},
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
    else if (type == SHARE)
      return shareApp();

    !!url && props.navigation.navigate(url);
  }

  const shareApp = () => {
    try {
      Share.share(({
        message: APP_DOWNLOAD_URL,
        url: APP_DOWNLOAD_URL,
        title: 'កម្មវិធីអ៊ែប “សុខភាពយុវជន”'
      }))
    }
    catch(error) {}
  }

  return (
    <View style={{marginTop: 40}}>
      <DrawerNavigatorItemComponent label="កែប្រែអត្តសញ្ញាណ" iconName="edit"/>
      {renderItems()}
    </View>
  )
}

export default DrawerNavigatorItemsComponent;