import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import TextComponent from './TextComponent';
import GenderSelectionButtonComponent from './genderSelections/GenderSelectionButtonComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import genders from '../../db/json/genders';

const GenderSelectionComponent = (props) => {
  const {t, i18n} = useTranslation();
  const renderGenders = () => {
    return genders.map((gender, index) => {
      return <GenderSelectionButtonComponent key={index} uuid={gender.uuid}
                icon={gender.icon}
                size={gender.size}
                label={gender[`name_${i18n.language}`]}
                value={gender.value}
                selectedValue={props.selectedValue}
                audio={gender.audio}
                playingUuid={props.playingUuid}
                updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
                updateValue={props.updateValue}
                accessibilityLabel={gender.accessibility_label}
             />
    });
  }

  return (
    <View>
      <TextComponent label={t('genderIdentity')} required={true} requiredColor={color.blackColor} style={{color: color.whiteColor, fontSize: largeFontSize()}} />
      <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
        { renderGenders() }
      </View>
    </View>
  )
}

export default GenderSelectionComponent;