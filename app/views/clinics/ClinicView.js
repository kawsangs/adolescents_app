import React from 'react';
import {View, Text} from 'react-native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import ClinicNavigationHeaderComponent from '../../components/clinics/ClinicNavigationHeaderComponent';
import ClinicListViewComponent from '../../components/clinics/ClinicListViewComponent';

const ClinicView = (props) => {
  const renderBody = () => {
    return <ClinicListViewComponent/>
  }

  return (
    <GradientScrollViewComponent
      header={<ClinicNavigationHeaderComponent navigation={props.navigation}/>}
      body={renderBody()}
      scrollViewStyle={{paddingRight: 0}}
    />
  )
}

export default ClinicView;