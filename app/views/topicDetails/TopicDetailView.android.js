import React, {useCallback, useState} from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import TopicDetailNavigationHeaderComponent from '../../components/topicDetails/TopicDetailNavigationHeaderComponent';
import TopicDetailMainComponent from '../../components/topicDetails/TopicDetailMainComponent';
import audioPlayerService from '../../services/audio_player_service';
import color, {backgroundColors} from '../../themes/color';

const TopicDetailView = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  const [textSize, setTextSize] = useState(props.route.params.textSize)
  useFocusEffect(
    useCallback(() => {
      return () => audioPlayerService.clearAllAudio()
    }, [])
  );

  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <LinearGradient
        colors={!!appTheme ? [appTheme.secondary_color, appTheme.primary_color] : backgroundColors}
        start={{x: 0, y: -0.3}} end={{x: 1, y: 0}}
        style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
      >
        <TopicDetailNavigationHeaderComponent title={props.route.params.name} uuid={props.route.params.uuid} textSize={textSize} updateTextSize={(size) => setTextSize(size)} />
        <ScrollView style={{flex: 1, backgroundColor: color.whiteColor}}>
          <TopicDetailMainComponent uuid={props.route.params.uuid} topicUuid={props.route.params.topic_uuid} type={props.route.params.type} textSize={textSize} />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default TopicDetailView;