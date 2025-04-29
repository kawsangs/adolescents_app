import React from 'react';
import {Text} from 'react-native-paper';

import color from '../../themes/color';
import {descriptionLineHeight} from '../../constants/component_constant';
import {OPTION} from '../../constants/faq_constant';
import Option from '../../models/Option';
import Question from '../../models/Question';

const TopicDetailDescription = (props) => {
  return (
    <Text style={{fontSize: parseFloat(props.textSize), lineHeight: descriptionLineHeight, color: color.blackColor, marginVertical: 10}}>
      { props.type == OPTION ? Option.findByUuid(props.uuid).message : Question.findByUuid(props.uuid).answer }
    </Text>
  )
}

export default TopicDetailDescription;