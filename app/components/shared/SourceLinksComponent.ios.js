import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import contactHelper from '../../helpers/contact_helper';
import {WEBSITE} from '../../constants/contact_constant';

const SourceLinksComponent = (props) => {
  const {t} = useTranslation();
  const appTheme = useSelector(state => state.appTheme.value);

  const renderSources = () => {
    return props.sources.map((source, index) => {
      return (
        <TouchableOpacity key={index} style={styles.btn} onPress={() => contactHelper.openContactLink(WEBSITE, JSON.parse(source).url)}>
          <Text style={{color: appTheme.primary_color ?? color.primaryColor, fontSize: parseFloat(props.textSize), lineHeight: 30}}>
            {JSON.parse(source).name}
          </Text>
        </TouchableOpacity>
      )
    })
  }

  return (
    <View style={{flexDirection: 'row', marginTop: 16}}>
      <View><Text style={[styles.label, {fontSize: parseFloat(props.textSize)}]}>{t('sources')}៖​</Text></View>
      <View style={{flex: 1, flexWrap: 'wrap'}}>{ renderSources() }</View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    alignSelf: 'center',
    color: color.blackColor,
    lineHeight: 30,
    marginRight: 8,
  },
  btn: {
    minHeight: componentUtil.pressableItemSize(),
    minWidth: componentUtil.pressableItemSize(),
    paddingBottom: 12
  }
});

export default SourceLinksComponent;