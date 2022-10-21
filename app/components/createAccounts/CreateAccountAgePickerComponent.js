import React from 'react';
import {useTranslation} from 'react-i18next';

import BottomSheetPickerComponent from '../shared/BottomSheetPickerComponent';
import BottomSheetPickerListComponent from '../shared/bottomSheetPicker/BottomSheetPickerListComponent';
import {agePickerContentHeight} from '../../constants/modal_constant';
import userHelper from '../../helpers/user_helper';

const CreateAccountAgePickerComponent = (props) => {
  const {t} = useTranslation();
  const onSelectItem = (age) => {
    props.updateSelectedItem(age.value);
    props.pickerModalRef.current?.dismiss();
  }

  const showPicker = () => {
    props.pickerRef.current?.setBodyContent(
      <BottomSheetPickerListComponent
        ref={props.pickerContentRef}
        title={t('yourAge')}
        isRequire={true}
        items={userHelper.getAgeDataset(t('yearOld'))}
        selectedItem={props.age}
        contentHeight={agePickerContentHeight}
        hideAudio={true}
        onSelectItem={(age) => onSelectItem(age)}
      />
    );

    props.pickerModalRef.current?.present();
  }

  return <BottomSheetPickerComponent
            title={t('yourAge')}
            label={!!props.age ? props.age : t('selectYourAge')}
            items={userHelper.getAgeDataset(t('yearOld'))}
            selectedItem={props.age}
            required={true}
            customContainerStyle={{ marginTop: 19 }}
            playingUuid={props.playingUuid}
            showPicker={() => showPicker()}
            updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
          />
}

export default CreateAccountAgePickerComponent;