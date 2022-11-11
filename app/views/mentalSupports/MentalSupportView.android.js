import React from 'react';

import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import MentalSupportCardListComponent from '../../components/mentalSupports/MentalSupportCardListComponent';

const MentalSupportView = () => {
  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={"សេវាគាំទ្រផ្លូចិត្ត"} />}
      body={<MentalSupportCardListComponent />}
    />
  )
}

export default MentalSupportView;