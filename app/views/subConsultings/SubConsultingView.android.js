import React from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import ConsultingListComponent from '../../components/shared/ConsultingListComponent';

const SubConsultingView = (props) => {
  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={props.route.params.name} />}
      body={<ConsultingListComponent activeCategoryUuid={null}/>}
      scrollViewStyle={{paddingHorizontal: 0, paddingBottom: 0}}
    />
  )
}

export default SubConsultingView;