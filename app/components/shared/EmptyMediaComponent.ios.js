import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import color from '../../themes/color';

const EmptyMediaComponent = (props) => {
  const renderIcon = () => {
    return React.cloneElement(props.isImage ? <FontAwesome/> : <FeatherIcon/>, {
      name: props.isImage ? "image" : "video-off",
      size: props.iconSize || 22, color: color.grayColor,
    });
  }

  return (
    <View style={[{width: '100%', height: '100%', backgroundColor: color.lightGrayColor, justifyContent: 'center', alignItems: 'center'}, props.style]}>
      {renderIcon()}
    </View>
  )
}

export default EmptyMediaComponent;