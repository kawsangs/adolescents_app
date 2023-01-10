import React from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilityFilterNavigationHeaderComponent from '../../components/facilityFilters/FacilityFilterNavigationHeaderComponent';
import FacilityFilterFormComponent from '../../components/facilityFilters/FacilityFilterFormComponent';

const FacilityFilterView = () => {
  return (
    <GradientScrollViewComponent
      header={<FacilityFilterNavigationHeaderComponent />}
      body={<FacilityFilterFormComponent />}
      // scrollViewStyle={{paddingTop: 16}}
    />
  )
}

export default FacilityFilterView;