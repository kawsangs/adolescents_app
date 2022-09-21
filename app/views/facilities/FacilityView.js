import React, {useState} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilityNavigationHeaderComponent from '../../components/facilities/FacilityNavigationHeaderComponent';
import FacilityListViewComponent from '../../components/facilities/FacilityListViewComponent';
import FacilityMapViewComponent from '../../components/facilities/FacilityMapViewComponent';
import {scrollViewPaddingBottom} from '../../constants/component_constant';

const FacilityView = (props) => {
  const [isListView, setIsListView] = useState(true);

  const renderBody = () => {
    return isListView ? <FacilityListViewComponent/> : <FacilityMapViewComponent/>;
  }

  return (
    <GradientScrollViewComponent
      header={<FacilityNavigationHeaderComponent navigation={props.navigation} isListView={isListView} updateIsListView={(status) => setIsListView(status)} />}
      body={renderBody()}
      scrollViewStyle={{paddingRight: 0, paddingBottom: scrollViewPaddingBottom - 8}}
    />
  )
}

export default FacilityView;