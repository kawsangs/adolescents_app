import React, {useEffect} from 'react';
import AudioRecorder from 'react-native-audio-recorder-button';
import { useSelector } from 'react-redux';

import User from '../../models/User';
import color from '../../themes/color';

const SurveyVoiceRecordQuestionComponent = (props) => {
  const audioRef = React.createRef()
  const appTheme = useSelector(state => state.appTheme.value);
  useEffect(() => {
    if (!!props.currentAnswer && !!props.currentAnswer.voice) {
      audioRef.current?.setRecordButtonVisible(false);
      audioRef.current?.setRecordedFile(props.currentAnswer.voice, props.currentAnswer.audio_duration)
    }
  }, []);

  const onVoiceChange = (audioPath, duration) => {
    if (!audioPath) return props.updateAnswer(null);

    const answerParams = {
      question_id: props.question.id,
      question_code: props.question.code,
      user_uuid: User.currentLoggedIn().uuid,
      survey_id: props.surveyUuid,
      value: audioPath || '',
      option_id: '',
      voice: audioPath || '',
      audio_duration: duration
    }
    props.updateAnswer(answerParams);
  }

  return (
    <AudioRecorder
      ref={audioRef}
      filename={`${props.question.id}.aac`}
      containerStyle={{padding: 16, paddingHorizontal: 0, height: 125}}
      onFinishRecord={(filePath, duration) => onVoiceChange(filePath, duration)}
      onDeleteAudio={() => onVoiceChange('', 0)}
      primaryColor={appTheme.primary_color ?? color.primaryColor}
    />
  )
}

export default SurveyVoiceRecordQuestionComponent;