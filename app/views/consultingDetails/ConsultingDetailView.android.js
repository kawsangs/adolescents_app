import React from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import ConsultingDetailMainComponent from '../../components/consultingDetails/ConsultingDetailMainComponent';

const ConsultingDetailView = (props) => {
  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={props.route.params.name} />}
      body={<ConsultingDetailMainComponent/>}
      scrollViewStyle={{paddingHorizontal: 0}}
    />
  )
}

export default ConsultingDetailView;