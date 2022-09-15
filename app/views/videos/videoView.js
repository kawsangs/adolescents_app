import React from 'react';
import { Text } from 'react-native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';

const VideoView = (props) => {
  const renderBody = () => {
    return <Text style={{color: 'white'}}>Video screennnnnn</Text>
  }

  return (
    <Text>Video View</Text>
  )
}

export default VideoView