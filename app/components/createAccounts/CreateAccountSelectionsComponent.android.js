import React from 'react';
import {useTranslation} from 'react-i18next';

import CheckboxComponent from '../shared/CheckboxComponent';
import CustomBottomSheetPickerComponent from '../shared/CustomBottomSheetPickerComponent';
import characteristics from '../../db/data/characteristics';
import userHelper from '../../helpers/user_helper';
import audioSources from '../../constants/audio_source_constant';
import {
  androidOccupationContentHeight, androidOccupationSnapPoints,
  androidEducationLevelContentHeight, androidEducationLevelSnapPoints
} from '../../constants/modal_constant';
import color from '../../themes/color';

const CreateAccountSelectionsComponent = (props) => {
  const {t} = useTranslation();
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
              title={t('yourLocation')}
              placeholder={t('selectYourLocation')}
              bottomSheetTitle={t('yourLocation')}
              required={true}
              requiredColor={color.blackColor}
              items={userHelper.getProvinceDataset(t)}
              selectedItem={props.province}
              onSelectItem={(item) => props.updateState('province', item)}
              pickerUuid='user-province-picker'
              placeholderAudio={audioSources["0.8.mp3"]}
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={{marginTop: sectionMarginTop}}
           />
  }

  const onOccupationChange = (occupation) => {
    props.updateState('occupation', occupation)
    if (occupation == 'student' && props.educationLevel == 'dropout_student')
      props.updateState('educationLevel', null);
  }

  const renderOccupationPicker = () => {
    return <CustomBottomSheetPickerComponent
              title={t('occupation')}
              placeholder={t('selectOccupation')}
              bottomSheetTitle={t('occupation')}
              required={true}
              requiredColor={color.blackColor}
              items={userHelper.getOccupationDataset(t)}
              selectedItem={props.occupation}
              onSelectItem={(item) => onOccupationChange(item)}
              pickerUuid='user-occupation-picker'
              placeholderAudio={null}
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={{marginTop: sectionMarginTop}}
              snapPoints={androidOccupationSnapPoints}
              pickerContentHeight={androidOccupationContentHeight}
              showSubtitle={true}
              subtitleStyle={{marginTop: 0}}
              itemTextStyle={{marginTop: -2}}
              listItemStyle={{paddingTop: 0}}
              placeholderStyle={{paddingLeft: 14}}
           />
  }

  const renderEducationLevelPicker = () => {
    return <CustomBottomSheetPickerComponent
              title={t('educationalLevel')}
              placeholder={t('selectEducationalLevel')}
              bottomSheetTitle={t('educationalLevel')}
              required={true}
              requiredColor={color.blackColor}
              items={userHelper.getEducationDataset(props.occupation, t)}
              selectedItem={props.educationLevel}
              onSelectItem={(item) => props.updateState('educationLevel', item)}
              pickerUuid='user-education-picker'
              placeholderAudio={null}
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={{marginTop: sectionMarginTop}}
              snapPoints={androidEducationLevelSnapPoints}
              pickerContentHeight={androidEducationLevelContentHeight}
              showSubtitle={true}
              subtitleStyle={{marginTop: 0}}
              itemTextStyle={{marginTop: -2}}
              listItemStyle={{paddingTop: 0}}
              disabled={!props.occupation}
              placeholderStyle={{paddingLeft: 14}}
           />
  }

  return <React.Fragment>
            { renderAgePicker() }
            { renderProvincePicker() }
            { renderOccupationPicker() }
            { renderEducationLevelPicker() }
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