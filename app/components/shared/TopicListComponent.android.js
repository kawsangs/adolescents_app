import React from 'react';
import {ScrollView} from 'react-native';

import TopicListCardComponent from './topicLists/TopicListCardComponent';
import {screenHorizontalPadding, scrollViewPaddingBottom} from '../../constants/component_constant';
import ComingSoonMessageComponent from './ComingSoonMessageComponent';

const TopicListComponent = (props) => {
  const onPress = (item) => {
    props.updatePlayingUuid(null);
    let moveNext = true;
    if (item.move_next != null && item.move_next != undefined)
      moveNext = item.move_next

    props.onPress(item, moveNext);
  }

  const renderList = () => {
    return props.items.map((item, index) => {
      return <TopicListCardComponent key={`const_${index}`} uuid={item.uuid} name={item.name} index={index} audio={item.audio}
                playingUuid={props.playingUuid} updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
                onPress={() => onPress(item)} />
    })
  }

  if (props.items.length == 0)
    return <ComingSoonMessageComponent />

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: screenHorizontalPadding, paddingTop: screenHorizontalPadding, paddingBottom: scrollViewPaddingBottom}}>
      { renderList() }
    </ScrollView>
  )
}

export default TopicListComponent;