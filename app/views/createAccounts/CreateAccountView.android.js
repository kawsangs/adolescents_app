import React from 'react';

import CreateAccountNavigationHeaderComponent from '../../components/createAccounts/CreateAccountNavigationHeaderComponent';
import CreateAccountFormComponent from '../../components/createAccounts/CreateAccountFormComponent';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';

const CreateAccountView = () => {
  let pickerRef = React.createRef();
  let pickerModalRef = React.createRef();

  return (
    <React.Fragment>
      <GradientScrollViewComponent
        header={<CreateAccountNavigationHeaderComponent/>}
        body={<CreateAccountFormComponent />}
      />
    </React.Fragment>
  )
}

export default CreateAccountView;