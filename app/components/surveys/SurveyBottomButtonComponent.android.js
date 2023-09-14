import React, {useState} from 'react';

import BigButtonComponent from '../shared/BigButtonComponent';
import SurveyQuestion from '../../models/SurveyQuestion';

const {useImperativeHandle} = React;

const SurveyBottomButtonComponent = React.forwardRef((props, ref) => {
  const [isValid, setIsValid] = useState(false);

  useImperativeHandle(ref, () => ({
    validateForm
  }))

  const validateForm = (currentSection, answers, sectionUuid) => {
    setIsValid(Object.keys(answers[currentSection]).length == SurveyQuestion.findBySectionId(sectionUuid).length)
  }

  const buttons = {
    next: {label: 'បន្ទាប់', audio: null},
    finish: {label: 'បញ្ចប់', audio: null}
  }

  return <BigButtonComponent label={props.currentSection != props.sections.length - 1 ? buttons.next.label : buttons.finish.label}
            uuid='save-button'
            audio={props.currentSection != props.sections.length - 1 ? buttons.next.audio : buttons.finish.audio}
            playingUuid={props.playingUuid}
            updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
            disabled={ !isValid }
            onPress={() => props.onPress()}
            accessibilityLabel='ប៊ូតុងក្រោមគេ'
          />
})

export default SurveyBottomButtonComponent;