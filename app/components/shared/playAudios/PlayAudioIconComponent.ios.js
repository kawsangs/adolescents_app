import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import color from '../../../themes/color';

const iconSet = {
  'ion_icon': {
    play: 'volume-high-outline',
    pause: 'pause',
    mute: 'volume-mute-outline'
  },
  'feather': {
    play: 'play',
    pause: 'pause',
    mute: 'play'
  }
}

const PlayAudioIconComponent = (props) => {
  const getIcon = () => {
    const icon = props.isSpeakerIcon ? iconSet['ion_icon'] : iconSet['feather'];
    if (!props.audio)
      return icon.mute;

    return props.isPlaying ? icon.pause : icon.play;
  }

  const getIconColor = () => {
    return props.isPlaying ? color.secondaryColor : props.iconColor || color.primaryColor;
  }

  const renderIcon = () => {
    return props.isSpeakerIcon ? <IonIcon/> : <FeatherIcon/>
  }

  {/* CloneElement is used so we can pass different type of icon and still using the same configuration */}
  return (
    React.cloneElement(renderIcon(), {
      name: getIcon(),
      size: props.iconSize, color: !!props.audio ? getIconColor() : color.mutedColor,
      style: [props.iconStyle, { marginLeft: (props.isPlaying  && !props.isSpeakerIcon) ? -2 : 0 }]
    })
  )
}

export default PlayAudioIconComponent;