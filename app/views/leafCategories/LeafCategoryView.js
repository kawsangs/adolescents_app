import React from 'react';
import {View, Text} from 'react-native';

// import ScrollViewWithAudioComponent from '../../components/shared/ScrollViewWithAudioComponent';

const LeafCategoryView = ({route, navigation}) => {
  return (
    <View>
      <Text>Leaf category</Text>
      <Text>{ route.params.uuid }</Text>
    </View>
  )
}

export default LeafCategoryView;