import React from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilityFilterNavigationHeaderComponent from '../../components/facilityFilters/FacilityFilterNavigationHeaderComponent';
import FacilityFilterFormComponent from '../../components/facilityFilters/FacilityFilterFormComponent';

const FacilityFilterView = () => {
  return (
    <GradientScrollViewComponent
      header={<FacilityFilterNavigationHeaderComponent />}
      body={<FacilityFilterFormComponent />}
      scrollViewStyle={{paddingBottom: 0}}
    />
  )
}

export default FacilityFilterView;