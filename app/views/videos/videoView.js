import React from 'react';
import { Text } from 'react-native';

import HomeNavigationHeader from '../../components/home/HomeNavigationHeader';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';

const VideoView = (props) => {
  const renderBody = () => {
    return <Text style={{color: 'white'}}>Video screennnnnn</Text>
  }

  return (
    <GradientScrollViewComponent
      header={<HomeNavigationHeader navigation={props.navigation}/>}
      body={renderBody()}
    />
  )
}

export default VideoView