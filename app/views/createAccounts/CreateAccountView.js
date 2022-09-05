import React from 'react';
import {View, Text} from 'react-native';

import CreateAccountNavigationHeaderComponent from '../../components/createAccounts/CreateAccountNavigationHeaderComponent';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import GenderSelectionComponent from '../../components/shared/GenderSelectionComponent';

const CreateAccountView = () => {
  return (
    <GradientScrollViewComponent
      header={<CreateAccountNavigationHeaderComponent/>}
      body={<GenderSelectionComponent/>}
    />
  )
}

export default CreateAccountView;