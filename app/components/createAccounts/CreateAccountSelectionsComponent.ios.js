import React from 'react';
import {useTranslation} from 'react-i18next';

import CheckboxComponent from '../shared/CheckboxComponent';
import CustomBottomSheetPickerComponent from '../shared/CustomBottomSheetPickerComponent';
import characteristics from '../../db/data/characteristics';
import userHelper from '../../helpers/user_helper';
import audioSources from '../../constants/audio_source_constant';
import color from '../../themes/color';

const CreateAccountSelectionsComponent = (props) => {
  const {t, i18n} = useTranslation();
  const sectionMarginTop = 22

  const renderAgePicker = () => {
    return <CustomBottomSheetPickerComponent
              title={t('yourAge')}
              placeholder={t('selectYourAge')}
              bottomSheetTitle={t('yourAge')}
              required={true}
              requiredColor={color.blackColor}
              items={userHelper.getAgeDataset(t('yearOld'))}
              selectedItem={props.age}
              onSelectItem={(item) => props.updateState('age', item)}
              pickerUuid='user-age-picker'
              placeholderAudio={audioSources["0.7.mp3"]}
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={{marginTop: sectionMarginTop}}
              hideListItemAudio={true}
           />
  }

  const renderProvincePicker = () => {
    return <CustomBottomSheetPickerComponent
              title={t('yourProvince')}
              placeholder={t('selectYourProvince')}
              bottomSheetTitle={t('yourProvince')}
              required={true}
              requiredColor={color.blackColor}
              items={userHelper.getProvinceDataset(i18n.language)}
              selectedItem={props.province}
              onSelectItem={(item) => props.updateState('province', item)}
              pickerUuid='user-province-picker'
              placeholderAudio={audioSources["0.8.mp3"]}
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={{marginTop: sectionMarginTop}}
           />
  }

  const renderOccupationPicker = () => {
    return <CustomBottomSheetPickerComponent
              title={t('occupation')}
              placeholder={t('selectYourOccupation')}
              bottomSheetTitle={t('yourOccupaton')}
              required={true}
              requiredColor={color.blackColor}
              items={userHelper.getOccupationDataset(i18n.language)}
              selectedItem={props.occupation}
              onSelectItem={(item) => props.updateState('occupation', item)}
              pickerUuid='user-occupation-picker'
              placeholderAudio={audioSources["0.8.mp3"]}
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={{marginTop: sectionMarginTop}}
              snapPoints={['58%']}
              pickerContentHeight={410}

              // snapPoints={isShortScreenDevice() ? ['66%'] : ['58%']}
              // pickerContentHeight={isShortScreenDevice() ? 408 : 410}
           />
  }

  return <React.Fragment>
            { renderAgePicker() }
            { renderProvincePicker() }
            { renderOccupationPicker() }
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