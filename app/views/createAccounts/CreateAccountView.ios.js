import React from 'react';

import CreateAccountNavigationHeaderComponent from '../../components/createAccounts/CreateAccountNavigationHeaderComponent';
import CreateAccountFormComponent from '../../components/createAccounts/CreateAccountFormComponent';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import {gradientScrollViewBigPaddingBottom} from '../../constants/ios_component_constant';

const CreateAccountView = () => {
  return (
    <React.Fragment>
      <GradientScrollViewComponent
        header={<CreateAccountNavigationHeaderComponent/>}
        body={<CreateAccountFormComponent />}
        scrollViewStyle={{paddingBottom: gradientScrollViewBigPaddingBottom}}
      />
    </React.Fragment>
  )
}

export default CreateAccountView;