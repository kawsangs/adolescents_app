import React, {useCallback, useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AppState } from 'react-native';

import TopicListComponent from '../shared/TopicListComponent';
import Question from '../../models/Question';
import {navigationRef} from '../../navigators/app_navigator';
import visitService from '../../services/visit_service';
import audioPlayerService from '../../services/audio_player_service';
import asyncStorageService from '../../services/async_storage_service';
import {QUESTION} from '../../constants/faq_constant';
import {TEXT_SIZE} from '../../constants/async_storage_constant';
import {xLargeFontSize} from '../../utils/font_size_util';
import {setPlayingAudio} from '../../features/audios/currentPlayingAudioSlice';

const TopicMainComponent = (props) => {
  const dispatch = useDispatch();
  const [playingUuid, setPlayingUuid] = React.useState(null);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (AppState.currentState == 'background')
        clearPlayingAudio();
    });

    return () => !!subscription && subscription.remove();
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        clearPlayingAudio();
      }
    }, [])
  );

  const clearPlayingAudio = () => {
    dispatch(setPlayingAudio(null));
    setPlayingUuid(null);
    setTimeout(() => {
      audioPlayerService.clearAllAudio();
    }, 100);
  }

  const onPress = async (item) => {
    const savedFontSize = await asyncStorageService.getItem(TEXT_SIZE);
    setPlayingUuid(null);
    visitService.recordVisitTopic(item, () => {
      const question = Question.findByUuid(item.question_uuids[0]);
      navigationRef.current?.navigate("TopicDetailView", { uuid: question.uuid , name: question.name, topic_uuid: item.uuid, type: QUESTION, textSize: savedFontSize || xLargeFontSize() });
    });
  }

  return (
    <TopicListComponent onPress={(item, moveNext) => onPress(item)}
      playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} hideAudio={false}
      searchText={props.searchText}
    />
  )
}

export default TopicMainComponent;