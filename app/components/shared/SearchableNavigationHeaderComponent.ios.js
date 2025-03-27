import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, TextInput} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';

import color from '../../themes/color';
import NavigationHeaderTitleComponent from './navigationHeaders/NavigationHeaderTitleComponent';
import NavigationHeaderButtonComponent from './navigationHeaders/NavigationHeaderButtonComponent';
import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';
import {navigationHeaderIconSize, navigationHeaderHorizontalPadding} from '../../constants/component_constant';
import componentUtil from '../../utils/component_util';

const SeachableNavigationHeaderComponent = (props) => {
  const {t} = useTranslation();
  const [isSearching, setIsSearching] = useState(false);
  const appTheme = useSelector(state => state.appTheme.value);
  const primaryColor = appTheme.primary_color ?? color.primaryColor;

  const renderIcon = (icon, iconSize, onPress) => {
    return <TextInput.Icon icon={icon} onPress={() => !!onPress && onPress()} size={iconSize} color={primaryColor} style={{height: componentUtil.pressableItemSize(), width: componentUtil.pressableItemSize()}}/>
  }

  const renderSearchBox = () => {
    return (
      <View style={styles.container}>
        <TextInput
          value={props.searchText}
          mode="flat"
          placeholder={t('whatServiceDoYouNeed')}
          autoFocus={true}
          left={renderIcon("search", navigationHeaderIconSize - 4, null)}
          right={renderIcon("x", navigationHeaderIconSize, () => props.updateSearchText(''))}
          style={styles.searchBox}
          underlineColor="transparent"
          onChangeText={(value) => props.updateSearchText(value)}
        />
      </View>
    )
  }

  const closeSearch = () => {
    setIsSearching(false);
    props.updateSearchText('');
  }

  return (
    <Appbar.Header style={[
      {elevation: 0, paddingHorizontal: navigationHeaderHorizontalPadding, backgroundColor: primaryColor, zIndex: 1},
      props.headerStyle
    ]}>
      { !isSearching ? props.leftButton :
        <NavigationHeaderBackButtonComponent onPress={() => closeSearch()}/>
      }
      { isSearching ? renderSearchBox()
        : <NavigationHeaderTitleComponent label={props.label} />
      }
      { !isSearching &&
        <NavigationHeaderButtonComponent onPress={() => setIsSearching(true)}
          icon={<FeatherIcon name="search" size={20} color={appTheme.primary_text_color ?? "white"}/>}
        />
      }
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

export default SeachableNavigationHeaderComponent;
