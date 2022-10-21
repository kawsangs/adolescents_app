import React from 'react';
import {useTranslation} from 'react-i18next';

import BottomSheetPickerComponent from '../shared/BottomSheetPickerComponent';
import BottomSheetPickerListComponent from '../shared/bottomSheetPicker/BottomSheetPickerListComponent';
import {provincePickerContentHeight} from '../../constants/modal_constant';
import userHelper from '../../helpers/user_helper';

const CreateAccountSelectionsComponent = (props) => {
  const {t, i18n} = useTranslation();
  const onSelectItem = (province) => {
    props.updateSelectedItem(province);
    props.pickerModalRef.current?.dismiss();
  }

  const showPicker = () => {
    props.pickerRef.current?.setBodyContent(
      <BottomSheetPickerListComponent
        ref={props.pickerContentRef}
        title={t('yourProvince')}
        isRequire={true}
        items={userHelper.getProvinceDataset(i18n.language)}
        selectedItem={props.province}
        contentHeight={provincePickerContentHeight}
        onSelectItem={(province) => onSelectItem(province)}
      />
    );

    props.pickerModalRef.current?.present();
  }

  return <BottomSheetPickerComponent
            title={t('yourProvince')}
            label={!!props.province ? props.province.label : t('selectYourProvince')}
            items={userHelper.getProvinceDataset(i18n.language)}
            selectedItem={props.province}
            required={true}
            customContainerStyle={{ marginTop: 19 }}
            playingUuid={props.playingUuid}
            showPicker={() => showPicker()}
            updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
          />
}

export default CreateAccountSelectionsComponent;