import React, { useState, useRef } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useTranslation } from 'react-i18next';

import IntroNextButtonComponent from '../../components/introductions/IntroNextButtonComponent';
import IntroPressableLabelComponent from '../../components/introductions/IntroPressableLabelComponent';
import IntroItemComponent from '../../components/introductions/IntroItemComponent';
import { slides } from '../../constants/intro_constant';
import color from '../../themes/color';

const IntroductionView = (props) => {
  const { t } = useTranslation();
  const [isLastIndex, setIsLastIndex] = useState(0);
  let slider = useRef();

  const renderItem = ({ item }) => {
    return <IntroItemComponent
              image={item.image}
              title={item.title}
              description={item.text}
           />
  }

  const onDone = () => {
    props.navigation.reset({ index: 0, routes: [{ name: 'BottomTabs' }] });
  }

  const renderNextButton = () => {
    return <IntroNextButtonComponent label='Next' />
  }

  const renderDoneButton = () => {
    return <IntroPressableLabelComponent label={ t('startUsingApp') } containerStyle={{ alignSelf: 'center', width: 'auto' }} />
  }

  const renderSkipButton = () => {
    return <IntroPressableLabelComponent label={ t('skip') } />
  }

  const onSkip = () => {
    setIsLastIndex(true)
    slider.goToSlide(slides.length - 1);
  }

  return <AppIntroSlider
            ref={ref => slider = ref}
            renderItem={renderItem} data={slides} onDone={onDone}
            showSkipButton={true}
            renderNextButton={renderNextButton}
            renderDoneButton={renderDoneButton}
            renderSkipButton={renderSkipButton}
            activeDotStyle={{backgroundColor: isLastIndex ? color.whiteColor : '#ce3581'}}
            dotStyle={{backgroundColor: isLastIndex ? color.whiteColor : '#cbcbcb'}}
            bottomButton={isLastIndex}
            onSlideChange={(index, lastIndex) => setIsLastIndex(index == slides.length - 1)}
            onSkip={() => onSkip()}
          />;
}

export default IntroductionView;