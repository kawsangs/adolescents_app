import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import DrawerNavigatorHeaderComponent from './DrawerNavigatorHeaderComponent';
import DrawerNavigatorItemsComponent from './DrawerNavigatorItemsComponent';

import {largeFontSize} from '../../utils/font_size_util';
import translationHelper from '../../helpers/translation_helper';
import pkg from '../../../package';

const DrawerNavigatorComponent = (props) => {
  const {t, i18n} = useTranslation();
  return (
    <View style={{flexGrow: 1, paddingLeft: 24, paddingRight: 20, backgroundColor: 'rgba(66, 145, 240, 0.97)'}}>
      <View style={{flexGrow: 1}}>
        <DrawerNavigatorHeaderComponent/>
        <DrawerNavigatorItemsComponent navigation={props.navigation}/>
      </View>
      <Text style={{color: 'white', paddingBottom: 64, fontSize: largeFontSize()}}>{t('version')} {translationHelper.translateNumber(pkg.version, i18n.language)}</Text>
    </View>
  )
}

export default DrawerNavigatorComponent;