import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

import TextComponent from '../TextComponent';
import PlayAudioComponent from '../PlayAudioComponent';
import color from '../../../themes/color';
import {getStyleOfDevice} from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/genderSelectionButtonComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/genderSelectionButtonComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const GenderSelectionButtonComponent = (props) => {
  const renderAudioButton = () => {
    return <View style={styles.audioContainer}>
            <PlayAudioComponent
              iconSize={24}
              audio={props.audio}
              btnStyle={styles.audioBtn}
              itemUuid={props.uuid}
              playingUuid={props.playingUuid}
              isSpeakerIcon={true}
              updatePlayingUuid={props.updatePlayingUuid}
              accessibilityLabel={props.accessibilityLabel}
            >
              <IonIcon/>
            </PlayAudioComponent>
          </View>
  }

  const renderGenderIcon = () => {
    const bgColor = (props.selectedValue == props.value) ? color.secondaryColor : '#ebedf1';
    const labelColor = (props.selectedValue == props.value) ? color.whiteColor : color.primaryColor;

    return <TouchableOpacity style={[styles.iconContainer, { backgroundColor: bgColor }]}
              onPress={() => props.updateValue(props.value)}
            >
            <View style={{flex: 2, justifyContent: 'flex-end'}}>
              <Icon name={props.icon} size={props.size} color={labelColor}/>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TextComponent label={props.label} style={[styles.label, { color: labelColor }]} />
            </View>
          </TouchableOpacity>
  }

  return <View style={styles.container}>
          { renderGenderIcon() }
          { renderAudioButton() }
        </View>
}

export default GenderSelectionButtonComponent;