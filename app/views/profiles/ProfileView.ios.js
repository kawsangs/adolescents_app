import React from 'react';
import {Text} from 'react-native-paper';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import ProfileMainComponent from '../../components/profiles/ProfileMainComponent';
import AlertModalComponent from '../../components/shared/AlertModalComponent';
import {navigationRef} from '../../navigators/app_navigator';
import {descriptionFontSize} from '../../constants/component_constant';

const ProfileView = () => {
  const profileRef = React.createRef();
  const [playingUuid, setPlayingUuid] = React.useState(null);
  const [visible, setVisible] = React.useState(false)
  const onBackPress = () => {
    setVisible(false)
    setPlayingUuid(null)
    navigationRef.current?.goBack()
  }

  const message = () => {
    return <React.Fragment>
              <Text style={{fontSize: descriptionFontSize}}>ព័ត៌មានដែលបានជ្រើសរើសនឹងត្រូវបាត់បង់នៅពេលចាកចេញ។</Text>
              <Text style={{marginTop: 12, fontSize: descriptionFontSize}}>តើអ្នកពិតជាចង់ចាកចេញមែន​ឬទេ?</Text>
           </React.Fragment>
  }

  const renderDiscardModal = () => {
    return <AlertModalComponent
              visible={visible}
              message={message}
              leftButtonLabel='ទេ'
              rightButtonLabel='បាទ/ចាស'
              onDismiss={() => setVisible(false)}
              onConfirm={() => onBackPress()}
           />
  }

  const renderContent = () => {
    return <React.Fragment>
              <ProfileMainComponent ref={profileRef} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}/>
              {renderDiscardModal()}
           </React.Fragment>
  }

  const onPress = () => {
    if (profileRef.current?.currentOccupation != profileRef.current?.selectedOccupation)
      return setVisible(true)

    onBackPress()
  }

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label='ព័ត៌មានរបស់អ្នក' onPress={() => onPress()}/>}
      body={renderContent()}
      scrollViewStyle={{paddingBottom: 86}}
      scrollable={true}
    />
  )
}

export default ProfileView;