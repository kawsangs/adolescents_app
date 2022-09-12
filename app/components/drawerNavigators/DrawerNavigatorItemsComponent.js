import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import DrawerNavigatorItemComponent from './DrawerNavigatorItemComponent';
import {isLowPixelDensityDevice, getStyleOfDevice} from '../../utils/responsive_util';

const DrawerNavigatorItemsComponent = (props) => {
  const {t} = useTranslation();
  const renderItems = () => {
    const items = {
      first: [
        {label: t('about'), icon: 'info', route_name: ''},
        {label: t('privacyPolicy'), icon: 'shield', route_name: ''},
        {label: t('termsAndConditions'), icon: 'file-text', route_name: ''},
      ],
      second: [
        {label: t('share'), icon: 'share-2', route_name: ''},
        {label: t('reset'), icon: 'rotate-ccw', route_name: ''},
      ]
    }
    const mobileMarginTop = isLowPixelDensityDevice() ? 16 : 34;
    const listItems = [];
    for (const key in items) {
      listItems.push(
        <View key={`container-${key}`} style={{marginTop: getStyleOfDevice(40, mobileMarginTop)}}>
          { items[key].map((item, index) => {
              return <DrawerNavigatorItemComponent key={`item-${index}`} label={item.label} iconName={item.icon} onPress={() => onPress(item.route_name)}/>
            })
          }
        </View>
      )
    }

    return listItems;
  }

  const onPress = (routeName) => {
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