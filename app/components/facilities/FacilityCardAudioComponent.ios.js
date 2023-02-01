import React from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import color from '../../themes/color';
import {getStyleOfDevice, isLowPixelDensityDevice} from '../../utils/responsive_util';

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
      <FeatherIcon name="chevron-right" color={color.primaryColor} size={getStyleOfDevice(32, 30)} style={{alignSelf: 'center', marginTop: getStyleOfDevice(-6, isLowPixelDensityDevice() ? -6 : -12) }} />
    </View>
  )
}

export default FacilityCardAudioComponent;