import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';

import TextComponent from '../TextComponent';
import CustomAudioPlayerButtonComponent from '../CustomAudioPlayerButtonComponent';
import color from '../../../themes/color';
import {getStyleOfDevice} from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/genderSelectionButtonComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/genderSelectionButtonComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const GenderSelectionButtonComponent = (props) => {
  const {i18n} = useTranslation();
  const appTheme = useSelector(state => state.appTheme.value);
  const renderAudioButton = () => {
    return <View style={[styles.audioContainer, {height: 38}]}>
              <CustomAudioPlayerButtonComponent
                audio={props.audio}
                itemUuid={props.uuid}
                buttonHeight={48}
                playingUuid={props.playingUuid}
                updatePlayingUuid={props.updatePlayingUuid}
                accessibilityLabel={props.accessibilityLabel}
                containerStyle={{width: '100%'}}
                buttonStyle={[styles.audioBtn, {height: '100%'}]}
              />
            </View>
  }

  const renderGenderIcon = () => {
    const bgColor = (props.selectedValue == props.value) ? appTheme.secondary_color ?? color.secondaryColor : '#ebedf1';
    const labelColor = (props.selectedValue == props.value) ? appTheme.primary_text_color ?? color.whiteColor : appTheme.primary_color ?? color.primaryColor;

    return <TouchableOpacity style={[styles.iconContainer, { backgroundColor: bgColor}]}
              onPress={() => props.updateValue(props.value)}
            >
            <View style={{justifyContent: 'flex-end', flex: 1}}>
              <Icon name={props.icon} size={props.size} color={labelColor}/>
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <TextComponent label={props.label} style={[styles.label, { color: labelColor }, i18n.language != 'km' && {fontSize: 15}]} />
            </View>
          </TouchableOpacity>
  }

  return <View style={styles.container}>
          { renderGenderIcon() }
          { renderAudioButton() }
        </View>
}

export default GenderSelectionButtonComponent;