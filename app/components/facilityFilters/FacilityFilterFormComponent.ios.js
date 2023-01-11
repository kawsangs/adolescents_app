import React, {useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import PickerComponent from '../shared/PickerComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import {defaultPickerSnapPoints} from '../../constants/modal_constant';
import userHelper from '../../helpers/user_helper';
import locationHelper from '../../helpers/location_helper';
import {navigationRef} from '../../navigators/app_navigator';

import {useDispatch} from 'react-redux';
import {storeSelectedLocation} from '../../features/facilities/filterFacilityLocationSlice';

const FacilityFilterFormComponent = () => {
  const {i18n} = useTranslation();
  const dispatch = useDispatch();
  let pickerRef = React.createRef();
  let pickerModalRef = React.createRef();
  const [province, setProvince] = useState(null);
  const [district, setDistrict] = useState(null);
  const [playingUuid, setPlayingUuid] = useState(null);
  
  const onSelectProvince = (province) => {
    setProvince(province);
    setDistrict(null);
  }

  const renderProvincePicker = () => {
    return <PickerComponent
              uuid="clinic-province-picker"
              title="ខេត្តដែលគ្លីនិកស្ថិតនៅ"
              placeholder="ជ្រើសរើសខេត្តរបស់គ្លីនិក"
              bottomSheetTitle="ខេត្តដែលគ្លីនិកស្ថិតនៅ"
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
              title="ខណ្ឌ ឬស្រុកដែលគ្លីនិកស្ថិតនៅ"
              placeholder="ជ្រើសរើសខណ្ឌ​ ឬស្រុករបស់គ្លីនិក"
              bottomSheetTitle="ខណ្ឌ ឬស្រុកដែលគ្លីនិកស្ថិតនៅ"
              required={false}
              pickerRef={pickerRef}
              pickerModalRef={pickerModalRef}
              items={locationHelper.getDistrictsByProvince(province.value)}
              selectedItem={district}
              playingUuid={playingUuid}
              updateSelectedItem={(district) => setDistrict(district)}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              placeholderContainerStyle={{paddingLeft: 16}}
           />
  }

  const applyFilter = () => {
    dispatch(storeSelectedLocation({
      province: !!province ? province.value : null,
      district: !!district  ? district.value: null
    }));
    navigationRef.current?.goBack();
  }

  const renderSaveBtn = () => {
    return <BigButtonComponent label={'ដាក់ប្រើ'}
              uuid='filter-btn'
              audio={null}
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              disabled={!province && !district}
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