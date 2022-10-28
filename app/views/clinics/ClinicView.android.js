import React from 'react';
import {View, Text} from 'react-native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import ClinicNavigationHeaderComponent from '../../components/clinics/ClinicNavigationHeaderComponent';

const ClinicView = (props) => {
  const renderBody = () => {
    return (
      <React.Fragment>
        <Text>Clinic view</Text>
      </React.Fragment>
    )
  }

  return (
    <GradientScrollViewComponent
      header={<ClinicNavigationHeaderComponent navigation={props.navigation}/>}
      body={renderBody()}
    />
  )
}

export default ClinicView;