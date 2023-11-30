import React from 'react';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import ProfileNavHeaderComponent from '../../components/profiles/ProfileNavHeaderComponent';
import ProfileMainComponent from '../../components/profiles/ProfileMainComponent';
import AlertModalComponent from '../../components/shared/AlertModalComponent';
import {navigationRef} from '../../navigators/app_navigator';
import {descriptionFontSize} from '../../constants/component_constant';

const ProfileView = () => {
  const {t} = useTranslation();
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
              <Text style={{fontSize: descriptionFontSize, lineHeight: 25}}>{t('discardSelectedOccupationMessage')}</Text>
              <Text style={{marginTop: 12, fontSize: descriptionFontSize}}>{t('doYouReallyWantToDiscard')}</Text>
           </React.Fragment>
  }

  const renderDiscardModal = () => {
    return <AlertModalComponent
              visible={visible}
              message={message}
              leftButtonLabel={t('no')}
              rightButtonLabel={t('discard')}
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
    if (profileRef.current?.currentOccupation != profileRef.current?.occupation)
      return setVisible(true)

    onBackPress()
  }

  return (
    <GradientScrollViewComponent
      header={<ProfileNavHeaderComponent onPress={() => onPress()}/>}
      body={renderContent()}
      scrollViewStyle={{paddingBottom: 86}}
      scrollable={true}
    />
  )
}

export default ProfileView;