import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Appbar, TextInput} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';
import color from '../../themes/color';
import {navigationHeaderIconSize, navigationHeaderHorizontalPadding} from '../../constants/component_constant';
import SearchHistory from '../../models/SearchHistory';
import componentUtil from '../../utils/component_util';
import {navigationRef} from '../../navigators/app_navigator';

const FacilitySearchHeaderComponent = (props) => {
  const {t} = useTranslation();
  const renderIcon = (icon, iconSize, onPress, buttonSize) => {
    return <TextInput.Icon icon={icon} onPress={() => !!onPress && onPress()} size={iconSize} color={color.primaryColor} style={{height: buttonSize, width: buttonSize}}/>
  }

  const renderSearchBox = () => {
    return (
      <View style={styles.container}>
        <TextInput
          value={props.searchText}
          mode="flat"
          placeholder={t('whatServiceDoYouNeed')}
          left={renderIcon("search", navigationHeaderIconSize - 4, null, 42)}
          right={renderIcon("x", navigationHeaderIconSize, () => props.updateSearchText(''), componentUtil.pressableItemSize())}
          style={styles.searchBox}
          underlineColor="transparent"
          onChangeText={(value) => props.updateSearchText(value)}
          onSubmitEditing={() => SearchHistory.upsert(props.searchText)}
        />
      </View>
    )
  }

  const closeSearch = () => {
    navigationRef.current?.goBack();
    props.updateSearchText('');
  }

  return (
    <Appbar.Header style={[{paddingHorizontal: navigationHeaderHorizontalPadding}, props.headerStyle]}>
      <NavigationHeaderBackButtonComponent onPress={() => closeSearch()}/>
      {renderSearchBox()}
    </Appbar.Header>
  )
}

const borderRadius = 30;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    flex: 1,
    height: 44,
    marginLeft: 4,
    marginRight: navigationHeaderHorizontalPadding + 4,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  searchBox: {
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: color.whiteColor,
    height: 48,
  }
});

export default FacilitySearchHeaderComponent;