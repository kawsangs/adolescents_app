import React from 'react';

import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import ComingSoonMessageComponent from '../../components/shared/ComingSoonMessageComponent';

const NavigationView = () => {
  return (
    <React.Fragment>
      <NavigationHeaderWithBackButtonComponent label={"ការជូនដំណឹង"} />
      <ComingSoonMessageComponent/>
    </React.Fragment>
  )
}

export default NavigationView;