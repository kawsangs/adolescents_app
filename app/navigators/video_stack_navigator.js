import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VideoView from '../views/videos/VideoView';

const Stack = createNativeStackNavigator();

const VideoStackNavigator = () => {
  return (
     <Stack.Navigator
        initialRouteName='VideoView'
      >
        <Stack.Screen
          name="VideoView"
          component={VideoView}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
  )
}

export default VideoStackNavigator;