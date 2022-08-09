import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

import IntroButtonComponent from '../../components/introductions/IntroButtonComponent';
import IntroItemComponent from '../../components/introductions/IntroItemComponent';
import color from '../../themes/color';
import { slides } from '../../constants/intro_constant';

const IntroductionView = (props) => {
  const renderItem = ({ item }) => {
    return <IntroItemComponent
              image={item.image}
              title={item.title}
              description={item.text}
           />
  }

  const onDone = () => {
    props.navigation.reset({ index: 1, routes: [{ name: 'BottomTabHome' }] });
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

  return <AppIntroSlider
            renderItem={renderItem} data={slides} onDone={onDone}
            showSkipButton={true}
            renderNextButton={renderNextButton}
            renderDoneButton={renderDoneButton}
            renderSkipButton={renderSkipButton}
            activeDotStyle={{backgroundColor: color.primaryColor}}
          />;
}

export default IntroductionView;