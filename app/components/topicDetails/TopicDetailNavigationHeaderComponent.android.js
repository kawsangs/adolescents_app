import React from 'react';
import {View, Animated} from 'react-native';
import { useSelector } from 'react-redux';

import AutoScrollLabelComponent from '../shared/AutoScrollLabelComponent';
import HeaderAudioControlComponent from '../shared/scrollViewWithAudios/HeaderAudioControlComponent';
import ScrollViewHeaderNavigationComponent from '../shared/scrollViewWithAudios/ScrollViewHeaderNavigationComponent';

import color from '../../themes/color';
import Question from '../../models/Question';

const TopicDetailNavigationHeaderComponent = (props) => {
  const question = Question.findByUuid(props.uuid)
  const appTheme = useSelector(state => state.appTheme.value);
  const primaryColor = appTheme.primary_color ?? color.primaryColor;

  return (
    <React.Fragment>
      <ScrollViewHeaderNavigationComponent textSize={props.textSize} scrollY={new Animated.Value(0)} updateTextSize={(textSize) => props.updateTextSize(textSize)}
        customTitle={<AutoScrollLabelComponent label={props.title} />}
        containerStyle={{backgroundColor: primaryColor}}
      />
      <View style={{backgroundColor: primaryColor, height: 100, zIndex: 1}}>
        <HeaderAudioControlComponent uuid={props.uuid} audio={question.audioSource} scrollY={new Animated.Value(0)} hideAnimation={true}
          sliderContainerStyle={{backgroundColor: 'transparent', marginBottom: -13}}
        />
      </View>
    </React.Fragment>
  )
}

export default TopicDetailNavigationHeaderComponent;