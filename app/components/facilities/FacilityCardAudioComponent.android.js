import React from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import color from '../../themes/color';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityCardAudioComponent = (props) => {
  const renderAudioBtn = () => {
    return <CustomAudioPlayerButtonComponent
              audio={props.audio}
              itemUuid={props.uuid}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
              accessibilityLabel={props.accessibilityLabel}
           />
  }

  return (
    <View>
      {renderAudioBtn()}
      <FeatherIcon name="chevron-right" color={color.primaryColor} size={32} style={{alignSelf: 'center', marginTop: getStyleOfDevice(-10, -6) }} />
    </View>
  )
}

export default FacilityCardAudioComponent;