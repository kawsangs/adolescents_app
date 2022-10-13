import React from 'react';

import CreateAccountNavigationHeaderComponent from '../../components/createAccounts/CreateAccountNavigationHeaderComponent';
import CreateAccountFormComponent from '../../components/createAccounts/CreateAccountFormComponent';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';

const CreateAccountView = () => {
  return (
    <GradientScrollViewComponent
      header={<CreateAccountNavigationHeaderComponent/>}
      body={<CreateAccountFormComponent/>}
      scrollViewStyle={{paddingBottom: 16}}
    />
  )
}

export default CreateAccountView;