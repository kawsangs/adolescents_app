import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Card} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfileCharacteristicsComponent from './ProfileCharacteristicsComponent';
import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import {descriptionFontSize} from '../../constants/component_constant';
import {cardBorderRadius, cardElevation} from '../../constants/component_constant';
import User from '../../models/User';
import translationHelper from '../../helpers/translation_helper';
import profileHelper from '../../helpers/profile_helper';

const ProfileInfoComponent = () => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const {t, i18n} = useTranslation();
  const loggedInUser = User.currentLoggedIn();

  const renderInfo = () => {
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
      return <View style={{flexDirection: 'row', paddingVertical: 6, alignItems: 'center'}} key={info.uuid}>
                <Text style={{flex: 6, fontSize: descriptionFontSize}}>{info.label}</Text>
                <View style={{flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                  {index == 0 && <Icon name={gender.icon} size={30} style={{marginRight: 8}} />}
                  <Text style={{fontSize: descriptionFontSize, fontWeight: 'bold'}}>{info.value}</Text>
                </View>
                <View style={{flex: 2, alignItems: 'center'}}>
                  { !!info.audio &&
                    <CustomAudioPlayerButtonComponent
                      audio={info.audio}
                      itemUuid={info.uuid}
                      playingUuid={playingUuid}
                      updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                      buttonStyle={{borderRadius: 0}}
                    />
                  }
                </View>
             </View>
    })
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={{borderRadius: cardBorderRadius, marginTop: 16, paddingLeft: 16, paddingBottom: 10}}>
      { loggedInUser.age != -1 && renderInfo()}
      { loggedInUser.characteristics.length > 0 &&
        <ProfileCharacteristicsComponent
          playingUuid={playingUuid}
          updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
        />
      }
    </Card>
  )
}

export default ProfileInfoComponent;