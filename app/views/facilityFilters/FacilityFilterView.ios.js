import React, {useState} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilityFilterNavigationHeaderComponent from '../../components/facilityFilters/FacilityFilterNavigationHeaderComponent';
import FacilityFilterFormComponent from '../../components/facilityFilters/FacilityFilterFormComponent';

const FacilityFilterView = () => {
  const [isReset, setIsReset] = useState(false)

  return (
    <GradientScrollViewComponent
      header={<FacilityFilterNavigationHeaderComponent markAsReset={() => setIsReset(true)} />}
      body={<FacilityFilterFormComponent isReset={isReset} updateIsReset={(status) => setIsReset(status)} />}
      scrollViewStyle={{paddingBottom: 0}}
      scrollable={false}
    />
  )
}

export default FacilityFilterView;