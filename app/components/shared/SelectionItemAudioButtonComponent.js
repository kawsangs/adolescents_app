import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import PlayAudioComponent from './PlayAudioComponent';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/selectionItemComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/selectionItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const SelectionItemAudioButtonComponent = (props) => {
  return <PlayAudioComponent
            playIcon='volume-high-outline'
            pauseIcon='pause'
            muteIcon='volume-mute-outline'
            iconSize={24}
            audio={props.audio}
            btnStyle={styles.audioBtn}
            itemUuid={props.itemUuid}
            playingUuid={props.playingUuid}
            updatePlayingUuid={props.updatePlayingUuid}
          >
            <IonIcon/>
          </PlayAudioComponent>
}

export default SelectionItemAudioButtonComponent;