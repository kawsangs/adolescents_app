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

  return <BigButtonComponent label={'Next'}
            uuid='save-button'
            audio={null}
            playingUuid={props.playingUuid}
            updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
            disabled={ !isValid }
            onPress={() => props.onPress()}
            accessibilityLabel='ប៊ូតុងក្រោមគេ'
          />
})

export default SurveyBottomButtonComponent;