import React from 'react';
import {Text} from 'react-native';
import {Card} from 'react-native-paper';

import color from '../../themes/color';
import {descriptionLineHeight, cardBorderRadius, cardElevation} from '../../constants/component_constant';
import {OPTION} from '../../constants/faq_constant';
import Option from '../../models/Option';
import Question from '../../models/Question';

const TopicDetailDescription = (props) => {
  return (
    <Card mode="elevated" elevation={cardElevation} style={{borderRadius: cardBorderRadius, paddingBottom: 0}}>
      <Text style={{fontSize: parseFloat(props.textSize), lineHeight: descriptionLineHeight, padding: 16, color: color.blackColor}}>
        { props.type == OPTION ? Option.findByUuid(props.uuid).message : Question.findByUuid(props.uuid).answer }
      </Text>
    </Card>
  )
}

export default TopicDetailDescription;