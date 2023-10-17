import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import BigButtonComponent from '../shared/BigButtonComponent';

const {useImperativeHandle} = React;

const SurveyBottomButtonComponent = React.forwardRef((props, ref) => {
  const [isValid, setIsValid] = useState(false);
  const {t} = useTranslation();

  useImperativeHandle(ref, () => ({
    validateForm,
    updateValidStatus,
  }))

  const validateForm = (currentSection, questionVisibleStatuses, questions) => {
    let query = '';
    for (let index in questionVisibleStatuses) {
      if (!!questionVisibleStatuses[index]) {
        if (!!query)
          query += ' && ';

        const questionType = questions[index].type.split('::')[1].toLowerCase();
        query += questionType == 'note' ? 'true'
                 : `${!!props.answers[currentSection][`section_${currentSection}_q_${index}`] && !!props.answers[currentSection][`section_${currentSection}_q_${index}`].value}`;
      }
    }
    setIsValid(eval(query));
  }

  const updateValidStatus = (status) => {
    setIsValid(status);
  }

  const buttons = {
    next: {label: t('next'), audio: null},
    finish: {label: t('finish'), audio: null}
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