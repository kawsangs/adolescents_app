import React from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import ProfileMainComponent from '../../components/profiles/ProfileMainComponent';

const ProfileView = () => {
  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label='ព័ត៌មានរបស់អ្នក'/>}
      body={<ProfileMainComponent/>}
      scrollViewStyle={{paddingBottom: 0}}
    />
  )
}

export default ProfileView;