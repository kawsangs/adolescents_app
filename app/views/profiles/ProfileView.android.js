import React from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import ProfileMainComponent from '../../components/profiles/ProfileMainComponent';
import {navigationRef} from '../../navigators/app_navigator';

const ProfileView = () => {
  const [playingUuid, setPlayingUuid] = React.useState(null);
  const onBackPress = () => {
    setPlayingUuid(null)
    navigationRef.current?.goBack()
  }

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label='ព័ត៌មានរបស់អ្នក' onPress={() => onBackPress()}/>}
      body={<ProfileMainComponent playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}/>}
      scrollViewStyle={{paddingBottom: 86}}
      scrollable={true}
    />
  )
}

export default ProfileView;