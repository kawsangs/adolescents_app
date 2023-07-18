import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import FeatherIcon from 'react-native-vector-icons/Feather';

import ProfileCharacteristicsComponent from './ProfileCharacteristicsComponent';
import ProfileInfoListItemComponent from './ProfileInfoListItemComponent';
import ProfileInfoOccupationItemComponent from './ProfileInfoOccupationItemComponent';
import AnonymousIconComponent from '../shared/AnonymousIconComponent';
import GradientViewComponent from '../shared/GradientViewComponent';
import {cardBorderRadius, cardElevation} from '../../constants/component_constant';
import {anonymousInfo} from '../../constants/user_constant';
import User from '../../models/User';
import translationHelper from '../../helpers/translation_helper';
import profileHelper from '../../helpers/profile_helper';
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
    return infos.map((info, index) => {
      return <ProfileInfoListItemComponent key={info.uuid} info={info} gender={gender} playingUuid={props.playingUuid} hasIcon={index == 0} updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)} />
    })
  }

  renderOccupation = () => {
    const info = {
      value: props.selectedOccupation != 'n_a' ? profileHelper.getOccupation(props.selectedOccupation).name_km : null,
      audio: props.selectedOccupation != 'n_a' ? profileHelper.getOccupation(props.selectedOccupation).audio : null,
    }
    return <ProfileInfoOccupationItemComponent key='user-occupation' info={info} playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              updateOccupation={(value) => props.updateSelectedOccupation(value)}
              loggedInUser={loggedInUser}
              selectedValue={props.selectedOccupation}
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
        { renderOccupation() }
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