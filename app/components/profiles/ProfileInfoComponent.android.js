import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import FeatherIcon from 'react-native-vector-icons/Feather';

import ProfileCharacteristicsComponent from './ProfileCharacteristicsComponent';
import ProfileInfoListItemComponent from './ProfileInfoListItemComponent';
import ProfileInfoItemWithPickerComponent from './ProfileInfoItemWithPickerComponent';
import AnonymousIconComponent from '../shared/AnonymousIconComponent';
import GradientViewComponent from '../shared/GradientViewComponent';
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
        label: 'អត្តសញ្ញាណយែនឌ័រ',
        value: gender.name_km,
        audio: gender.audio,
      },
      {
        uuid: 'user-age',
        label: 'អាយុ',
        value: `${translationHelper.translateNumber(loggedInUser.age, i18n.language)} ${t('year')}`,
        audio: null,
      },
      {
        uuid: 'user-province',
        label: 'ទីតាំង',
        value: province.name_km,
        audio: province.audio,
      }
    ]
    const nonPickerComponents =  infos.map((info, index) => {
      return <ProfileInfoListItemComponent key={info.uuid} info={info} gender={gender} playingUuid={props.playingUuid} hasIcon={index == 0} updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)} />
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
      value: props.occupation != 'n_a' ? profileHelper.getOccupation(props.occupation).name_km : null,
      audio: props.occupation != 'n_a' ? profileHelper.getOccupation(props.occupation).audio : null,
    }
    return <ProfileInfoItemWithPickerComponent uuid='user-occupation-picker' info={info} playingUuid={props.playingUuid}
              label='មុខរបរ' bottomSheetTitle='មុខរបរ' pickerLabel='ជ្រើសរើសមុខរបរ'
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
      info = { value: profileHelper.getEducation(props.educationLevel).name_km, audio: profileHelper.getEducation(props.educationLevel).audio }

    return <ProfileInfoItemWithPickerComponent uuid='user-education-picker' info={info} playingUuid={props.playingUuid}
              label='កម្រិតវប្បធម៌' bottomSheetTitle='កម្រិតវប្បធម៌' pickerLabel='ជ្រើសរើសកម្រិតវប្បធម៌'
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
      return <ProfileInfoListItemComponent key={index} info={info} gender={null} playingUuid={props.playingUuid} hasIcon={false}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={{paddingVertical: 16, paddingBottom: 10}}
            />
    })
  }

  renderProfileIcon = () => {
    return <GradientViewComponent style={{ width: 76, height: 76, borderRadius: 76, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 12, left: 16, zIndex: 1, borderWidth: 3, borderColor: color.whiteColor }}>
              {loggedInUser.anonymous ? <AnonymousIconComponent size={38} color={color.whiteColor} containerStyle={{marginLeft: -3}}/>
                : <FeatherIcon name='user' color={color.whiteColor} size={38} />
              }
           </GradientViewComponent>
  }

  const paddingBottom = (loggedInUser.anonymous || loggedInUser.characteristics.length > 0) ? 8 : 0;
  return (
    <View>
      {renderProfileIcon()}
      <Card mode="elevated" elevation={cardElevation}
        style={{borderRadius: cardBorderRadius, marginTop: 44, paddingLeft: 16, paddingBottom: paddingBottom, paddingTop: 36, marginBottom: 12}}
      >
        { !loggedInUser.anonymous ? renderInfo() : renderAnonymousInfo()}
        { loggedInUser.characteristics.length > 0 &&
          <ProfileCharacteristicsComponent
            playingUuid={props.playingUuid}
            updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
          />
        }
      </Card>
    </View>
  )
}

export default ProfileInfoComponent;