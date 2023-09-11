import React from 'react';
import {Card} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import ProfileCharacteristicsComponent from './ProfileCharacteristicsComponent';
import ProfileInfoListItemComponent from './ProfileInfoListItemComponent';
import ProfileInfoItemWithPickerComponent from './ProfileInfoItemWithPickerComponent';

import GradientViewComponent from '../shared/GradientViewComponent';
import ProfileIconComponent from '../shared/ProfileIconComponent';
import {cardBorderRadius, cardElevation} from '../../constants/component_constant';
import {anonymousInfo} from '../../constants/user_constant';
import {
  androidOccupationContentHeight, androidOccupationSnapPoints,
  androidEducationLevelSnapPoints, androidEducationLevelContentHeight
} from '../../constants/modal_constant';
import User from '../../models/User';
import translationHelper from '../../helpers/translation_helper';
import profileHelper from '../../helpers/profile_helper';
import userHelper from '../../helpers/user_helper';
import {getStyleOfDevice} from '../../utils/responsive_util';
import color from '../../themes/color';

const ProfileInfoComponent = (props) => {
  const {t, i18n} = useTranslation();
  const loggedInUser = User.currentLoggedIn();

  renderInfo = () => {
    const gender = profileHelper.getGender(loggedInUser.gender);
    const province = profileHelper.getProvince(loggedInUser.province_id)
    const infos = [
      {
        uuid: 'user-gender',
        label: t('genderIdentity'),
        value: gender.name_km,
        audio: gender.audio,
      },
      {
        uuid: 'user-age',
        label: t('age'),
        value: `${translationHelper.translateNumber(loggedInUser.age, i18n.language)} ${t('yearOld')}`,
        audio: null,
      },
      {
        uuid: 'user-province',
        label: t('location'),
        value: province[`name_${i18n.language}`],
        audio: province.audio,
      }
    ]
    const nonPickerComponents = infos.map((info, index) => {
     return <ProfileInfoListItemComponent key={info.uuid} info={info} gender={gender} playingUuid={props.playingUuid} hasIcon={index == 0}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
            />
    })
    return <React.Fragment>
              { nonPickerComponents }
              { renderOccupation() }
              { renderEducationLevel() }
           </React.Fragment>
  }

  onOccupationChange = (occupation) => {
    props.updateOccupation(occupation)
    if (occupation == 'student' && props.educationLevel == 'dropout_student')
      props.updateEducationLevel('n_a');
  }

  renderOccupation = () => {
    const info = {
      value: props.occupation != 'n_a' ? profileHelper.getOccupation(props.occupation)[`name_${i18n.language}`] : null,
      audio: props.occupation != 'n_a' ? profileHelper.getOccupation(props.occupation).audio : null,
    }
    return <ProfileInfoItemWithPickerComponent uuid='user-occupation-picker' info={info} playingUuid={props.playingUuid}
              label={t('occupation')} bottomSheetTitle={t('occupation')} pickerLabel={t('selectOccupation')}
              items={userHelper.getOccupationDataset(i18n.language)}
              selectedValue={props.occupation}
              isPickerVisible={loggedInUser.occupation == 'n_a'}
              snapPoints={androidOccupationSnapPoints}
              contentHeight={androidOccupationContentHeight}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              updateSelectedItem={(value) => onOccupationChange(value)}
           />
  }

  renderEducationLevel = () => {
    let info = { value: null, audio: null }
    if (props.educationLevel != 'n_a' && props.occupation != 'n_a')
      info = { value: profileHelper.getEducation(props.educationLevel)[`name_${i18n.language}`], audio: profileHelper.getEducation(props.educationLevel).audio }

    return <ProfileInfoItemWithPickerComponent uuid='user-education-picker' info={info} playingUuid={props.playingUuid}
              label={t('educationalLevel')} bottomSheetTitle={t('educationalLevel')} pickerLabel={t('selectEducationalLevel')}
              disabled={props.occupation == 'n_a'}
              items={userHelper.getEducationDataset(i18n.language, props.occupation)}
              selectedValue={props.educationLevel}
              isPickerVisible={loggedInUser.education_level == 'n_a'}
              snapPoints={androidEducationLevelSnapPoints}
              contentHeight={androidEducationLevelContentHeight}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              updateSelectedItem={(value) => props.updateEducationLevel(value)}
           />
  }

  renderAnonymousInfo = () => {
    return anonymousInfo.map((info, index) => {
      return <ProfileInfoListItemComponent key={index} info={info} label={t(info.label)} value={t('anonymous')} gender={null} playingUuid={props.playingUuid} hasIcon={false}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={{paddingVertical: 16, paddingBottom: 10}}
            />
    })
  }

  renderProfileIcon = () => {
    return <GradientViewComponent style={{ width: 76, height: 76, borderRadius: 66, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 12, left: 16, zIndex: 1, borderWidth: 3, borderColor: color.whiteColor }}>
              <ProfileIconComponent/>
           </GradientViewComponent>
  }

  const paddingBottom = (loggedInUser.anonymous || loggedInUser.characteristics.length > 0) ? getStyleOfDevice(10, 8) : 6;
  return (
    <React.Fragment>
      {renderProfileIcon()}
      <Card mode="elevated" elevation={cardElevation}
        style={{borderRadius: cardBorderRadius, marginTop: 46, paddingLeft: 16, paddingBottom: paddingBottom, paddingTop: 36, marginBottom: 12}}
      >
        { !loggedInUser.anonymous ? renderInfo() : renderAnonymousInfo()}
        { loggedInUser.characteristics.length > 0 &&
          <ProfileCharacteristicsComponent
            playingUuid={props.playingUuid}
            updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
          />
        }
      </Card>
    </React.Fragment>
  )
}

export default ProfileInfoComponent;