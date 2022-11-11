import React from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import ComingSoonMessageComponent from '../../components/shared/ComingSoonMessageComponent';

const NavigationView = () => {
  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={"ការជូនដំណឹង"} />}
      body={<ComingSoonMessageComponent/>}
      scrollViewStyle={{paddingBottom: 0, paddingHorizontal: 0}}
    />
  )
}

export default NavigationView;