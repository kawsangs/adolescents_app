import React from 'react';

import CreateAccountNavigationHeaderComponent from '../../components/createAccounts/CreateAccountNavigationHeaderComponent';
import CreateAccountBodyComponent from '../../components/createAccounts/CreateAccountBodyComponent';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';

const CreateAccountView = () => {
  return (
    <GradientScrollViewComponent
      header={<CreateAccountNavigationHeaderComponent/>}
      body={<CreateAccountBodyComponent/>}
    />
  )
}

export default CreateAccountView;