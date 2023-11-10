import React, {useEffect, useRef, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

import TopicListCardComponent from './topicLists/TopicListCardComponent';
import CustomFlatListComponent from './CustomFlatListComponent';
import ComingSoonMessageComponent from './ComingSoonMessageComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import { gradientScrollViewBigPaddingBottom } from '../../constants/ios_component_constant';
import topicService from '../../services/topic_service';
import Topic from '../../models/Topic';

const TopicListComponent = (props) => {
  const listRef = useRef();
  const [hasInternet, setHasInternet] = useState(true);
  const [topics, setTopics] = useState(Topic.getAll());

  useEffect(() => {
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (hasInternet != state.isInternetReachable)
        setHasInternet(state.isInternetReachable);
    });

    return () => { unsubscribeNetInfo && unsubscribeNetInfo() }
  }, []);

  useEffect(() => {
    if (!!props.searchText)
      setTopics(Topic.containByName(props.searchText))
    else
      setTopics(Topic.getAll());
    
  }, [props.searchText])

  const renderItem = (item, index) => {
    return <TopicListCardComponent key={`const_${index}`} uuid={item.uuid} name={item.name_km} index={index} audio={item.audioSource}
              playingUuid={props.playingUuid} updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)} hideAudio={props.hideAudio}
              onPress={() => props.onPress(item, (item.move_next != null && item.move_next != undefined) ? item.move_next : true)}
              accessibilityLabel={`ជំនួយទី${index + 1}`}
           />
  }

  const onRefresh = () => {
    topicService.syncAll(() => {
      setTopics(Topic.getAll());
      listRef.current?.stopRefreshLoading()
    }, () => listRef.current?.stopRefreshLoading());
  }

  if (topics.length == 0)
    return <ComingSoonMessageComponent />

  return <CustomFlatListComponent
          ref={listRef}
          data={topics}
          renderItem={({item, index}) => renderItem(item, index)}
          keyExtractor={item => item.uuid}
          hasInternet={hasInternet}
          refreshingAction={() => onRefresh()}
          customContentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingBottom: gradientScrollViewBigPaddingBottom, paddingTop: 16}}
          hideFooterLoading={true}
        />
}

export default TopicListComponent;