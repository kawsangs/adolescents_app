import React, {useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import TopicListComponent from '../shared/TopicListComponent';
import Topic from '../../models/Topic';
import Question from '../../models/Question';
import {navigationRef} from '../../navigators/app_navigator';
import visitService from '../../services/visit_service';
import asyncStorageService from '../../services/async_storage_service';
import audioPlayerService from '../../services/audio_player_service';
import {QUESTION} from '../../constants/faq_constant';
import {TEXT_SIZE} from '../../constants/async_storage_constant';
import {xLargeFontSize} from '../../utils/font_size_util';

const TopicMainComponent = (props) => {
  const [playingUuid, setPlayingUuid] = React.useState(null);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setPlayingUuid(null);
        setTimeout(() => {
          audioPlayerService.clearAllAudio();
        }, 100);
      }
    }, [])
  );

  const onPress = async (item) => {
    const savedFontSize = await asyncStorageService.getItem(TEXT_SIZE);
    setPlayingUuid(null);
    visitService.recordVisitTopic(item, () => {
      const question = Question.findByUuid(item.question_uuids[0]);
      navigationRef.current?.navigate("TopicDetailView", { uuid: question.uuid , name: question.name, topic_uuid: item.uuid, type: QUESTION, textSize: savedFontSize || xLargeFontSize() });
    });
  }

  return (
    <TopicListComponent items={Topic.getAll()} onPress={(item, moveNext) => onPress(item)}
      playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} hideAudio={false}
    />
  )
}

export default TopicMainComponent;