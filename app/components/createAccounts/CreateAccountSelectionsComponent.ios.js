import React from 'react';
import {useTranslation} from 'react-i18next';

import CheckboxComponent from '../shared/CheckboxComponent';
import PickerComponent from '../shared/PickerComponent';
import CreateAccountAgePickerComponent from './CreateAccountAgePickerComponent';
import characteristics from '../../db/data/characteristics';
import userHelper from '../../helpers/user_helper';
import audioSources from '../../constants/audio_source_constant';

const CreateAccountSelectionsComponent = (props) => {
  const {t, i18n} = useTranslation();
  const sectionMarginTop = 22

  const renderAgePicker = () => {
    return <CreateAccountAgePickerComponent
              pickerRef={props.pickerRef}
              pickerModalRef={props.pickerModalRef}
              age={props.age}
              playingUuid={props.playingUuid}
              updateSelectedItem={(age) => props.updateState('age', age)}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
           />
  }

  const renderProvincePicker = () => {
    return <PickerComponent
              uuid="user-province-picker"
              title={t('yourProvince')}
              placeholder={t('selectYourProvince')}
              bottomSheetTitle={t('yourProvince')}
              required={true}
              audio={audioSources["0.8.mp3"]}
              pickerRef={props.pickerRef}
              pickerModalRef={props.pickerModalRef}
              items={userHelper.getProvinceDataset(i18n.language)}
              selectedItem={props.province}
              playingUuid={props.playingUuid}
              updateSelectedItem={(province) => props.updateState('province', province)}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              accessibilityLabel="ប្រអប់ជ្រើសរើសទីតាំង"
           />
  }

  return <React.Fragment>
            { renderAgePicker() }
            { renderProvincePicker() }
            <CheckboxComponent items={characteristics} title={t('yourCharacteristic')}
              selectedItems={props.characteristics}
              style={{marginTop: sectionMarginTop}}
              playingUuid={props.playingUuid}
              updateSelectedItems={(characteristics) => props.updateState('characteristics', characteristics)}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              accessibilityLabel='ស្ថានភាពរស់នៅទី'
            />
        </React.Fragment>
}

export default CreateAccountSelectionsComponent;