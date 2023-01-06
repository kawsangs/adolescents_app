import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BottomSheetModalMainComponent from '../shared/BottomSheetModalMainComponent';
import provinces from '../../db/json/provinces';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {navigationHeaderIconSize} from '../../constants/component_constant';

const FacilityFilterLocationBottomSheetComponent = (props) => {
  const {t} = useTranslation();
  const [searchText, setSearchText] = useState('');
  const [filteredProvinces, setFilteredProvinces] = useState(provinces)

  const renderListItem = () => {
    return filteredProvinces.map((province, index) => {
      return <React.Fragment key={province.uuid}>
                <TouchableOpacity style={{height: 48, justifyContent: 'center'}}>
                  <Text>{province.name_km}</Text>
                </TouchableOpacity>
                <View style={{ borderColor: color.lightGrayColor, borderBottomWidth: index == provinces.length - 1 ? 0 : 0.6 }} />
             </React.Fragment>
    })
  }

  const renderIcon = (icon, iconSize, onPress, buttonSize) => {
    return <TextInput.Icon icon={icon} onPress={() => !!onPress && onPress()} size={iconSize} color={color.primaryColor} style={{height: buttonSize, width: buttonSize}}/>
  }

  const filterProvince = (name) => {
    setSearchText(name);
    setFilteredProvinces(provinces.filter(province => province.name_km.includes(name)))
  }

  const searchBox = () => {
    return <View style={styles.searchContainer}>
            <TextInput
              value={searchText}
              mode="flat"
              placeholder={t('enterProvinceNameYourWantToSearch')}
              left={renderIcon("search", navigationHeaderIconSize - 4, null, 42)}
              right={renderIcon("x", navigationHeaderIconSize, () => filterProvince(''), componentUtil.pressableItemSize())}
              style={styles.searchBox}
              underlineColor="transparent"
              onChangeText={(name) => filterProvince(name)}
            />
          </View>
  }

  return (
    <BottomSheetModalMainComponent
      title={t('selectClinicLocation')}
      containerStyle={{height: hp('69%')}}
      scrollViewStyle={{paddingHorizontal: 16}}
    >
      {searchBox()}
      <View>
        {renderListItem()}
      </View>
    </BottomSheetModalMainComponent>
  )
}

const borderRadius = 8;

const styles = StyleSheet.create({
  searchContainer: {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderWidth: 0.5,
    borderColor: 'gray',
    flex: 1,
    maxHeight: 48,
    marginVertical: 10,
    overflow: 'hidden',
  },
  searchBox: {
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: color.whiteColor,
    height: 50,
    overflow: 'hidden',
    marginTop: -1
  }
});

export default FacilityFilterLocationBottomSheetComponent