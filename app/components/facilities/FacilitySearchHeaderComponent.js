import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Appbar, TextInput} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import {getStyleOfDevice} from '../../utils/responsive_util';
import {navigationHeaderIconSize} from '../../constants/component_constant';

const FacilitySearchHeaderComponent = (props) => {
  const {t} = useTranslation();
  const renderIcon = (icon, iconSize, onPress) => {
    return <TextInput.Icon icon={icon} onPress={() => console.log("Clear search")} size={iconSize} color={color.primaryColor}/>
  }

  const renderSearchBox = () => {
    return (
      <View style={styles.container}>
        <TextInput
          mode="flat"
          placeholder={t('whatServiceDoYouNeed')}
          left={renderIcon("x", navigationHeaderIconSize)}
          right={renderIcon("search", navigationHeaderIconSize - 4)}
          style={styles.searchBox}
          underlineColor="transparent"
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
    height: 42,
    backgroundColor: color.whiteColor,
  }
});

export default FacilitySearchHeaderComponent;