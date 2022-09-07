import React from 'react';

import TextInputWithAudioComponent from './TextInputWithAudioComponent';
import mathUtil from '../../utils/math_util';

const NumericInputWithAudioComponent = (props) => {
  const onFocus = () => {
    if (mathUtil.getIntegerOf(props.value) < 1)
      props.updateValue('');
  }

  const onBlur = () => {
    if (!props.value)
      props.updateValue(0);
  }

  const updateValue = (value) => {
    if (mathUtil.getIntegerOf(value) < 1)
      return props.updateValue('');

    props.updateValue(value)
  }

  return (
    <TextInputWithAudioComponent label={props.label} style={props.style}
      keyboardType="number-pad"
      value={props.value}
      updateValue={updateValue}
      maxLength={2}
      onBlur={() => onBlur()}
      onFocus={() => onFocus()}
    />
  )
}

export default NumericInputWithAudioComponent;