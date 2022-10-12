import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import DrawerNavigatorItemComponent from './DrawerNavigatorItemComponent';
import {isLowPixelDensityDevice, getStyleOfDevice} from '../../utils/responsive_util';
import navigationService from '../../services/navigation_service';

const SCREEN = 'sc';
const SHARE = 'sh';
const SIGN_OUT = 'so';

const DrawerNavigatorItemsComponent = (props) => {
  const {t} = useTranslation();
  const renderItems = () => {
    const items = {
      first: [
        {label: t('about'), icon: 'info', route_name: '', type: SCREEN},
        {label: t('privacyPolicy'), icon: 'shield', route_name: '', type: SCREEN},
        {label: t('termsAndConditions'), icon: 'file-text', route_name: '', type: SCREEN},
      ],
      second: [
        {label: t('share'), icon: 'share-2', route_name: '', type: SHARE},
        {label: t('reset'), icon: 'rotate-ccw', route_name: '', type: SIGN_OUT},
      ]
    }
    const mobileMarginTop = isLowPixelDensityDevice() ? 16 : 34;
    const listItems = [];
    for (const key in items) {
      listItems.push(
        <View key={`container-${key}`} style={{marginTop: getStyleOfDevice(40, mobileMarginTop)}}>
          { items[key].map((item, index) => {
              return <DrawerNavigatorItemComponent key={`item-${index}`} label={item.label} iconName={item.icon} onPress={() => onPress(item.route_name, item.type)}/>
            })
          }
        </View>
      )
    }

    return listItems;
  }

  const onPress = (routeName, type) => {
    if (type == SIGN_OUT)
      return navigationService.logOut();

    !!routeName && props.navigation.navigate(routeName);
  }

  return (
    <View style={{marginTop: 40}}>
      <DrawerNavigatorItemComponent label="កែប្រែអត្តសញ្ញាណ" iconName="edit"/>
      {renderItems()}
    </View>
  )
}

export default DrawerNavigatorItemsComponent;