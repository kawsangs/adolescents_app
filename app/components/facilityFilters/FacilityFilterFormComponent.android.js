import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import PickerComponent from '../shared/PickerComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import {defaultPickerSnapPoints} from '../../constants/modal_constant';
import userHelper from '../../helpers/user_helper';
import locationHelper from '../../helpers/location_helper';
import {navigationRef} from '../../navigators/app_navigator';

import {useDispatch, useSelector} from 'react-redux';
import {storeSelectedLocation, resetSelectedLocation} from '../../features/facilities/filterFacilityLocationSlice';

const FacilityFilterFormComponent = (props) => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  let pickerRef = React.createRef();
  let pickerModalRef = React.createRef();
  const [province, setProvince] = useState(null);
  const [district, setDistrict] = useState(null);
  const [playingUuid, setPlayingUuid] = useState(null);
  const filteredLocation = useSelector(state => state.filterFacilityLocation.value);

  useEffect(() => {
    setProvince(filteredLocation.province);
    setDistrict(filteredLocation.district);
  }, [filteredLocation]);

  useEffect(() => {
    if (!props.isReset) return;

    setProvince(null)
    setDistrict(null)
  }, [props.isReset]);
  
  const onSelectProvince = (province) => {
    props.updateIsReset(false);
    setProvince(province.value);
    setDistrict(null);
  }

  const renderProvincePicker = () => {
    return <PickerComponent
              uuid="clinic-province-picker"
              title={t('provinceOfTheClinic')}
              placeholder={t('selectProvinceOfTheClinic')}
              bottomSheetTitle={t('selectProvinceOfTheClinic')}
              required={false}
              pickerRef={pickerRef}
              pickerModalRef={pickerModalRef}
              items={userHelper.getProvinceDataset(i18n.language)}
              selectedItem={province}
              playingUuid={playingUuid}
              updateSelectedItem={(province) => onSelectProvince(province)}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              placeholderContainerStyle={{paddingLeft: 16}}
           />
  }

  const renderDistrictPicker = () => {
    return <PickerComponent
              uuid="clinic-province-picker"
              title={t('districtOfTheClinic')}
              placeholder={t('selectDistrictOfTheClinic')}
              bottomSheetTitle={t('selectDistrictOfTheClinic')}
              required={false}
              pickerRef={pickerRef}
              pickerModalRef={pickerModalRef}
              items={locationHelper.getDistrictsByProvince(province)}
              selectedItem={district}
              playingUuid={playingUuid}
              updateSelectedItem={(district) => setDistrict(district.value)}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              placeholderContainerStyle={{paddingLeft: 16}}
           />
  }

  const applyFilter = () => {
    if (!!province || !!district)
      dispatch(storeSelectedLocation({
        province: !!province ? province : null,
        district: !!district  ? district: null
      }));
    else
      dispatch(resetSelectedLocation());

    navigationRef.current?.goBack();
  }

  const renderSaveBtn = () => {
    return <BigButtonComponent label={'ដាក់ប្រើ'}
              uuid='filter-btn'
              audio={null}
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              onPress={() => applyFilter()}
              accessibilityLabel='ប៊ូតុងដាក់ប្រើ'
              style={{position: 'absolute', bottom: 16, width: '100%'}}
            />
  }

  return (
    <View style={{flexGrow: 1}}>
      { renderProvincePicker() }
      { !!province && renderDistrictPicker() }
      { renderSaveBtn() }
      <FormBottomSheetModalComponent ref={pickerRef} formModalRef={pickerModalRef} snapPoints={defaultPickerSnapPoints} onDismissModal={() => pickerRef.current?.setBodyContent(null)} />
    </View>
  )
}

export default FacilityFilterFormComponent;