import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import contactHelper from '../../helpers/contact_helper';
import {WEBSITE} from '../../constants/contact_constant';

const SourceLinksComponent = (props) => {
  const {t} = useTranslation();

  const renderSources = () => {
    return props.sources.map((source, index) => {
      return (
        <TouchableOpacity key={index} style={styles.btn} onPress={() => contactHelper.openContactLink(WEBSITE, JSON.parse(source).url)}>
          <Text style={{color: color.primaryColor, fontSize: parseFloat(props.textSize)}}>{JSON.parse(source).name}</Text>
        </TouchableOpacity>
      )
    })
  }

  return (
    <View style={{flexDirection: 'row', marginTop: 16}}>
      <View style={{height: componentUtil.pressableItemSize(), marginTop: 5, justifyContent: 'center'}}>
        <Text style={[styles.label, {fontSize: parseFloat(props.textSize)}]}>{t('sources')}៖​</Text>
      </View>
      <View>{ renderSources() }</View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
    color: color.blackColor,
    marginRight: 8,
  },
  btn: {
    height: componentUtil.pressableItemSize(),
    minWidth: componentUtil.pressableItemSize(),
    marginLeft: 5,
    marginTop: 5,
    justifyContent: 'center'
  }
});

export default SourceLinksComponent;