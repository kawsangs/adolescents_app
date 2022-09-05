import React from 'react';
import {View, Text} from 'react-native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import CreateAccountNavigationHeaderComponent from '../../components/createAccounts/CreateAccountNavigationHeaderComponent';

const CreateAccountView = () => {
  return (
    <View>
      <CreateAccountNavigationHeaderComponent/>
    </View>

    // <GradientScrollViewComponent
    //   header={<NavigationHeaderComponent/>}
    //   // body={renderBody()}
    // />
  )
}

export default CreateAccountView;