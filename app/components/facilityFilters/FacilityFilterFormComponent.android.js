import React, {useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import PickerComponent from '../shared/PickerComponent';
import {defaultPickerSnapPoints} from '../../constants/modal_constant';
import userHelper from '../../helpers/user_helper';

const FacilityFilterFormComponent = () => {
  const {i18n} = useTranslation();
  let pickerRef = React.createRef();
  let pickerModalRef = React.createRef();
  const [province, setProvince] = useState(null);
  const [playingUuid, setPlayingUuid] = useState(null);
  
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
              updateSelectedItem={(province) => setProvince(province)}
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
              items={userHelper.getProvinceDataset(i18n.language)}
              selectedItem={province}
              playingUuid={playingUuid}
              updateSelectedItem={(province) => setProvince(province)}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              placeholderContainerStyle={{paddingLeft: 16}}
           />
  }

  return (
    <View>
      { renderProvincePicker() }
      {/* { renderDistrictPicker() } */}
      <FormBottomSheetModalComponent ref={pickerRef} formModalRef={pickerModalRef} snapPoints={defaultPickerSnapPoints} onDismissModal={() => pickerRef.current?.setBodyContent(null)} />
    </View>
  )
}

export default FacilityFilterFormComponent;