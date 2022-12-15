import React from 'react';
import {useTranslation} from 'react-i18next';

import CheckboxComponent from '../shared/CheckboxComponent';
import CreateAccountAgePickerComponent from './CreateAccountAgePickerComponent';
import CreateAccountProvincePickerComponent from './CreateAccountProvincePickerComponent';
import characteristics from '../../db/json/characteristics';

const CreateAccountSelectionsComponent = (props) => {
  const {t} = useTranslation();
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
    return <CreateAccountProvincePickerComponent
              pickerRef={props.pickerRef}
              pickerModalRef={props.pickerModalRef}
              province={props.province}
              playingUuid={props.playingUuid}
              updateSelectedItem={(province) => props.updateState('province', province)}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
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
              accessibilityLabel='សា្ថនភាពរស់នៅទី'
            />
        </React.Fragment>
}

export default CreateAccountSelectionsComponent;