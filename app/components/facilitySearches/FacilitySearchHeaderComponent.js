import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Appbar, TextInput} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import {getStyleOfDevice} from '../../utils/responsive_util';
import {navigationHeaderIconSize} from '../../constants/component_constant';
import {navigationRef} from '../../navigators/app_navigator';

const FacilitySearchHeaderComponent = (props) => {
  const {t} = useTranslation();
  const renderIcon = (icon, iconSize, onPress) => {
    return <TextInput.Icon icon={icon} onPress={() => !!onPress && onPress()} size={iconSize} color={color.primaryColor}/>
  }

  const onPressClear = () => {
    if (!props.searchText) return navigationRef.current?.goBack();

    props.updateSearch('');
  }

  const renderSearchBox = () => {
    return (
      <View style={styles.container}>
        <TextInput
          value={props.searchText}
          mode="flat"
          placeholder={t('whatServiceDoYouNeed')}
          left={renderIcon("x", navigationHeaderIconSize, () => onPressClear())}
          right={renderIcon("search", navigationHeaderIconSize - 4)}
          style={styles.searchBox}
          underlineColor="transparent"
          onChangeText={(value) => props.updateSearch(value)}
        />
      </View>
    )
  }

  return (
    <Appbar.Header style={[{paddingHorizontal: getStyleOfDevice(14, 0)}, props.headerStyle]}>
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
    height: 40,
    marginHorizontal: 16,
    overflow: 'hidden',
    justifyContent: 'center'
  },
  searchBox: {
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 44,
    backgroundColor: color.whiteColor,
  }
});

export default FacilitySearchHeaderComponent;