import React from 'react';
import {ScrollView} from 'react-native';

import TopicListCardComponent from './topicLists/TopicListCardComponent';
import {screenHorizontalPadding, scrollViewPaddingBottom} from '../../constants/component_constant';
import ComingSoonMessageComponent from './ComingSoonMessageComponent';

const TopicListComponent = (props) => {
  const renderList = () => {
    return props.items.map((item, index) => {
      return <TopicListCardComponent key={`const_${index}`} uuid={item.uuid} name={item.name} index={index} audio={item.audio}
                playingUuid={props.playingUuid} updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)} hideAudio={props.hideAudio}
                onPress={() => props.onPress(item, (item.move_next != null && item.move_next != undefined) ? item.move_next : true)} />
    })
  }

  if (props.items.length == 0)
    return <ComingSoonMessageComponent />

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: screenHorizontalPadding, paddingTop: props.hideAudio ? 0 : 10, paddingBottom: scrollViewPaddingBottom}}>
      { renderList() }
    </ScrollView>
  )
}

export default TopicListComponent;