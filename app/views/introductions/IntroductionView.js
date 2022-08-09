import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

import App from '../../../App';
import IntroButtonComponent from '../../components/introductions/IntroButtonComponent';
import IntroItemComponent from '../../components/introductions/IntroItemComponent';
import color from '../../themes/color';
import { slides } from '../../constants/intro_constant';

const IntroductionView = () => {
  const [ skipIntro, setSkipIntro ] = useState(false);

  const renderItem = ({ item }) => {
    return <IntroItemComponent
              image={item.image}
              title={item.title}
              description={item.text}
           />
  }

  const onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setSkipIntro(true);
  }

  const renderNextButton = () => {
    return <IntroButtonComponent label='Next' />
  }

  const renderDoneButton = () => {
    return <IntroButtonComponent label='Done' />
  }

  const renderSkipButton = () => {
    return <IntroButtonComponent label='Skip' />
  }

  if (!skipIntro)
    return <AppIntroSlider
              renderItem={renderItem} data={slides} onDone={onDone}
              showSkipButton={true}
              renderNextButton={renderNextButton}
              renderDoneButton={renderDoneButton}
              renderSkipButton={renderSkipButton}
              activeDotStyle={{backgroundColor: color.primaryColor}}
           />;

  return <App />;
}

export default IntroductionView;