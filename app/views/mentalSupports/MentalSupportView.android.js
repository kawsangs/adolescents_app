import React from 'react';

import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import MentalSupportCardListComponent from '../../components/mentalSupports/MentalSupportCardListComponent';

const MentalSupportView = (props) => {
  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={props.route.params.name} />}
      body={<MentalSupportCardListComponent />}
      isNotScrollView={true}
    />
  )
}

export default MentalSupportView;