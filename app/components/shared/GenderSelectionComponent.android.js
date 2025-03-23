import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';

import TextComponent from './TextComponent';
import GenderSelectionButtonComponent from './genderSelections/GenderSelectionButtonComponent';
import color from '../../themes/color';
import {xLargeFontSize} from '../../utils/font_size_util';
import genders from '../../db/data/genders';

const GenderSelectionComponent = (props) => {
  const {t} = useTranslation();
  const appTheme = useSelector(state => state.appTheme.value);
  const renderGenders = () => {
    return genders.map((gender, index) => {
      return <GenderSelectionButtonComponent key={index} uuid={gender.uuid}
                icon={gender.icon}
                size={gender.size}
                label={t(gender.name)}
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
      <TextComponent label={t('genderIdentity')} required={true} requiredColor={color.blackColor} style={{color: appTheme.primary_text_color ?? color.whiteColor, fontSize: xLargeFontSize()}} />
      <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
        { renderGenders() }
      </View>
    </View>
  )
}

export default GenderSelectionComponent;