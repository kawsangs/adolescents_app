import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TopicView from '../views/topics/TopicView';
import QuestionView from '../views/questions/QuestionView';
import TopicDetailView from '../views/topicDetails/TopicDetailView';

const Stack = createNativeStackNavigator();

const TopicStackNavigator = () => {
  return (
     <Stack.Navigator
        initialRouteName='TopicView'
      >
        <Stack.Screen
          name="TopicView"
          component={TopicView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="QuestionView"
          component={QuestionView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="TopicDetailView"
          component={TopicDetailView}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
  )
}

export default TopicStackNavigator;