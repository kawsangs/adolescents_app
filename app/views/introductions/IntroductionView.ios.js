import React, { useState, useRef } from 'react';
import {SafeAreaView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useTranslation } from 'react-i18next';

import IntroNextButtonComponent from '../../components/introductions/IntroNextButtonComponent';
import IntroPressableLabelComponent from '../../components/introductions/IntroPressableLabelComponent';
import IntroDoneButtonComponent from '../../components/introductions/IntroDoneButtonComponent';
import IntroItemComponent from '../../components/introductions/IntroItemComponent';
import { slides } from '../../constants/intro_constant';
import color from '../../themes/color';

const IntroductionView = (props) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    currentIndex: 0,
    isLastIndex: false,
  });
  let slider = useRef();

  const renderItem = ({ item }) => {
    return <IntroItemComponent image={item.image} title={item.title} description={item.text} />
  }

  const onDone = () => {
    props.navigation.reset({ index: 0, routes: [{ name: 'LoginSelectionView' }] });
  }

  const renderNextSlide = () => {
    if (state.isLastIndex)
      return;

    const nextIndex = state.currentIndex + 1;
    slider.goToSlide(state.currentIndex + 1);
    setState({ currentIndex: nextIndex, isLastIndex: nextIndex == slides.length - 1 })
  }

  const onSkip = () => {
    setState({ currentIndex: slides.length - 1, isLastIndex: true });
    slider.goToSlide(slides.length - 1);
  }

  return <SafeAreaView style={{flexGrow: 1, backgroundColor: color.whiteColor}}>
            <AppIntroSlider
              ref={ref => slider = ref}
              renderItem={renderItem} data={slides} onDone={onDone}
              showSkipButton={true}
              renderNextButton={() => <IntroNextButtonComponent label='Next' onPress={() => renderNextSlide()} />}
              renderDoneButton={() => <IntroDoneButtonComponent/>}
              renderSkipButton={() => <IntroPressableLabelComponent label={ t('skip') } />}
              activeDotStyle={{backgroundColor: state.isLastIndex ? color.whiteColor : '#ce3581'}}
              dotStyle={{backgroundColor: state.isLastIndex ? color.whiteColor : '#cbcbcb'}}
              bottomButton={state.isLastIndex}
              onSlideChange={(index, lastIndex) => setState({ currentIndex: index, isLastIndex: index == slides.length - 1 })}
              onSkip={() => onSkip()}
            />
         </SafeAreaView>
}

export default IntroductionView;