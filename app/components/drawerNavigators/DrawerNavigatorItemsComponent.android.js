import React from 'react';
import {View, Linking, Share} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import DrawerNavigatorItemComponent from './DrawerNavigatorItemComponent';
import {isLowPixelDensityDevice, getStyleOfDevice} from '../../utils/responsive_util';
import {APP_DOWNLOAD_URL, PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL} from '../../constants/main_constant';

const SCREEN = 'sc';
const LINK = 'li';
const SHARE = 'sh';

const DrawerNavigatorItemsComponent = (props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const renderItems = () => {
    const items = {
      first: [
        {label: t('share'), icon: 'share-2', url: '', type: SHARE, accessibility_label: 'ប៊ូតុងចែករំលែកកម្មវិធី'},
        {label: t('privacyPolicy'), icon: 'shield', url: PRIVACY_POLICY_URL, type: LINK, accessibility_label: 'ប៊ូតុងគោលការណ៍ឯកជនភាព'},
        {label: t('termsAndConditions'), icon: 'file-text', url: TERMS_AND_CONDITIONS_URL, type: LINK, accessibility_label: 'ប៊ូតុងគោលការណ៍ និងលក្ខខណ្ឌ'},
      ],
      second: [
        {label: t('about'), icon: 'info', url: 'AboutUsView', type: SCREEN, accessibility_label: 'ប៊ូតុងអំពីកម្មវិធី'},
      ]
    }
    const mobileMarginTop = isLowPixelDensityDevice() ? 16 : 34;
    const listItems = [];
    for (const key in items) {
      listItems.push(
        <View key={`container-${key}`} style={{marginTop: getStyleOfDevice(40, mobileMarginTop)}}>
          { items[key].map((item, index) => {
              return <DrawerNavigatorItemComponent key={`item-${index}`} label={item.label} iconName={item.icon} accessibilityLabel={item.accessibility_label} onPress={() => onPress(item.url, item.type)}/>
            })
          }
        </View>
      )
    }

    return listItems;
  }

  const onPress = (url, type) => {
    if (type == LINK)
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
      {renderItems()}
    </View>
  )
}

export default DrawerNavigatorItemsComponent;