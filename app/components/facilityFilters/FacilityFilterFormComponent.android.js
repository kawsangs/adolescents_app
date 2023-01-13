import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import CustomBottomSheetPickerComponent from '../shared/CustomBottomSheetPickerComponent';
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
    return <CustomBottomSheetPickerComponent
              title={t('provinceOfTheClinic')}
              placeholder={t('selectProvinceOfTheClinic')}
              bottomSheetTitle={t('selectProvinceOfTheClinic')}
              items={userHelper.getProvinceDataset(i18n.language)}
              selectedItem={province}
              onSelectItem={(item) => onSelectProvince(item)}
              pickerUuid='clinic-province-picker'
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              containerStyle={{marginTop: 16}}
              placeholderStyle={{paddingLeft: 16}}
           />
  }

  const renderDistrictPicker = () => {
    return <CustomBottomSheetPickerComponent
              title={t('districtOfTheClinic')}
              placeholder={t('selectDistrictOfTheClinic')}
              bottomSheetTitle={t('selectDistrictOfTheClinic')}
              items={locationHelper.getDistrictsByProvince(province)}
              selectedItem={district}
              onSelectItem={(item) => setDistrict(item)}
              pickerUuid='clinic-district-picker'
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              containerStyle={{marginTop: 22}}
              placeholderStyle={{paddingLeft: 16}}
              hideListItemAudio={true}
              disabled={!province}
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
    return <BigButtonComponent label={t('search')}
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
      { renderDistrictPicker() }
      { renderSaveBtn() }
      <FormBottomSheetModalComponent ref={pickerRef} formModalRef={pickerModalRef} snapPoints={defaultPickerSnapPoints} onDismissModal={() => pickerRef.current?.setBodyContent(null)} />
    </View>
  )
}

export default FacilityFilterFormComponent;