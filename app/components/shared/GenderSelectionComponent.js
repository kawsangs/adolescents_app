import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import GenderSelectionButtonComponent from './genderSelections/GenderSelectionButtonComponent';
import color from '../../themes/color';
import {normalFontSize} from '../../utils/font_size_util';

import safetyPlan from '../../assets/audios/safety_plan.mp3';
import yourStoryLong from '../../assets/audios/your_story_long.mp3';
import yourStory from '../../assets/audios/your_story.mp3';

const GenderSelectionComponent = () => {
  const {t} = useTranslation();
  const [playingUuid, setPlayingUuid] = useState(null);
  const renderGenders = () => {
    const genders = [
      { uuid: 'gender-1', icon: "gender-male", label: t('male'), audio: safetyPlan, size: 34 },
      { uuid: 'gender-2', icon: "gender-female", label: t('female'), audio: yourStoryLong, size: 36 },
      { uuid: 'gender-3', icon: "gender-transgender", label: t('lgbt'), audio: yourStory, size: 28 },
      { uuid: 'gender-4', icon: "progress-question", label: t('unknow'), audio: null, size: 28 },
    ];

    return genders.map((gender, index) => {
      return <GenderSelectionButtonComponent key={index} uuid={gender.uuid} icon={gender.icon} label={gender.label} size={gender.size}
                audio={gender.audio}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
             />
    });
  }

  return (
    <View style={{paddingHorizontal: 16, marginTop: 16}}>
      <Text style={{color: color.whiteColor, fontSize: normalFontSize()}}>{t('genderIdentity')}</Text>
      <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
        { renderGenders() }
      </View>
    </View>
  )
}

export default GenderSelectionComponent;