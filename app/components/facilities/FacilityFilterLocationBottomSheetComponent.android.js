import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';

import BottomSheetModalMainComponent from '../shared/BottomSheetModalMainComponent';
import provinces from '../../db/json/provinces';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import { largeFontSize } from '../../utils/font_size_util';
import {defaultPickerContentHeight} from '../../constants/modal_constant';

import { useDispatch, useSelector } from 'react-redux';
import { resetSelectedLocation, storeSelectedLocation } from '../../features/facilities/filterFacilityLocationSlice';

const FacilityFilterLocationBottomSheetComponent = (props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const filteredProvince = useSelector(state => state.filterFacilityLocation.value)

  const onSelectProvince = (province) => {
    props.modalRef.current?.dismiss();
    if (!!filteredProvince && filteredProvince == province.value) {
      dispatch(resetSelectedLocation());
      return;
    }

    dispatch(storeSelectedLocation(province.value))
  }

  const renderListItem = () => {
    return provinces.map((province, index) => {
      return <React.Fragment key={province.uuid}>
                <TouchableOpacity onPress={() => onSelectProvince(province)} style={{height: componentUtil.mediumPressableItemSize(), alignItems: 'center', flexDirection: 'row'}}>
                  <Text style={{flex: 1, fontSize: largeFontSize()}}>{province.name_km}</Text>
                  { filteredProvince == province.value && <Icon name='check' color={color.successColor} size={22} /> }
                </TouchableOpacity>
                <View style={{ borderColor: color.lightGrayColor, borderBottomWidth: index == provinces.length - 1 ? 0 : 0.6 }} />
             </React.Fragment>
    })
  }

  return (
    <BottomSheetModalMainComponent
      title={t('selectClinicLocation')}
      containerStyle={{height: hp(defaultPickerContentHeight)}}
      scrollViewStyle={{paddingHorizontal: 16}}
    >
      {renderListItem()}
    </BottomSheetModalMainComponent>
  )
}

export default FacilityFilterLocationBottomSheetComponent