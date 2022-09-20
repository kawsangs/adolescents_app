import React from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilityNavigationHeaderComponent from '../../components/facilities/FacilityNavigationHeaderComponent';
import FacilityListViewComponent from '../../components/facilities/FacilityListViewComponent';

const FacilityView = (props) => {
  const renderBody = () => {
    return <FacilityListViewComponent/>
  }

  return (
    <GradientScrollViewComponent
      header={<FacilityNavigationHeaderComponent navigation={props.navigation}/>}
      body={renderBody()}
      scrollViewStyle={{paddingRight: 0}}
    />
  )
}

export default FacilityView;