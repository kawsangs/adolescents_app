import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

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
              playIcon='volume-high-outline'
              pauseIcon='pause'
              muteIcon='volume-mute-outline'
              iconSize={24}
              audio={props.audio}
              btnStyle={styles.audioBtn}
              itemUuid={props.uuid}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
            >
              <IonIcon/>
            </PlayAudioComponent>
          </View>
  }

  const renderGenderIcon = () => {
    return <TouchableOpacity style={styles.iconContainer}>
            <View style={{flex: 2, justifyContent: 'flex-end'}}>
              <Icon name={props.icon} size={props.size} color={color.whiteColor}/>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text style={styles.label}>{props.label}</Text>
            </View>
          </TouchableOpacity>
  }

  return <View style={styles.container}>
          { renderGenderIcon() }
          { renderAudioButton() }
        </View>
}

export default GenderSelectionButtonComponent;