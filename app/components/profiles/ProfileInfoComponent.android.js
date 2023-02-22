import React, {useState} from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import ProfileCharacteristicsComponent from './ProfileCharacteristicsComponent';
import ProfileInfoListItemComponent from './ProfileInfoListItemComponent';
import {cardBorderRadius, cardElevation} from '../../constants/component_constant';
import {anonymousInfo} from '../../constants/user_constant';
import User from '../../models/User';
import translationHelper from '../../helpers/translation_helper';
import profileHelper from '../../helpers/profile_helper';

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
    return infos.map((info, index) => {
     return <ProfileInfoListItemComponent key={info.uuid} info={info} gender={gender} playingUuid={props.playingUuid} hasIcon={index == 0}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
            />
    })
  }

  renderAnonymousInfo = () => {
    return anonymousInfo.map((info, index) => {
      return <ProfileInfoListItemComponent key={index} info={info} gender={null} playingUuid={props.playingUuid} hasIcon={false}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={{paddingVertical: 16, paddingBottom: 10}}
            />
    })
  }

  const paddingBottom = (loggedInUser.anonymous || loggedInUser.characteristics.length > 0) ? 8 : 0;
  return (
    <Card mode="elevated" elevation={cardElevation}
      style={{borderRadius: cardBorderRadius, marginTop: 16, paddingLeft: 16, paddingBottom: paddingBottom}}
    >
      { !loggedInUser.anonymous ? renderInfo() : renderAnonymousInfo()}
      { loggedInUser.characteristics.length > 0 &&
        <ProfileCharacteristicsComponent
          playingUuid={props.playingUuid}
          updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
        />
      }
    </Card>
  )
}

export default ProfileInfoComponent;