import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IonIcon from 'react-native-vector-icons/Ionicons';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import NavigationHeaderButtonComponent from '../shared/navigationHeaders/NavigationHeaderButtonComponent';
import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import VideoFilterBottomSheetComponent from './VideoFilterBottomSheetComponent';
import {navigationHeaderIconSize} from '../../constants/component_constant';
import {contactSnapPoints} from '../../constants/modal_constant';

const VideoNavHeaderComponent = (props) => {
  const {t} = useTranslation();
  let bottomSheetRef = React.createRef();
  let modalRef = React.createRef();
  const filterBtn = () => {
    return <NavigationHeaderButtonComponent onPress={() => showAuthorList()}
              icon={<IonIcon name="options-outline" size={navigationHeaderIconSize} color="white"/>}
           />
  }

  const showAuthorList = () => {
    bottomSheetRef.current?.setBodyContent(<VideoFilterBottomSheetComponent/>)
    modalRef.current?.present()
  }

  return (
    <React.Fragment>
      <NavigationHeaderComponent leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>} label={t('video')}
        rightButton={filterBtn()}
      />
      <FormBottomSheetModalComponent ref={bottomSheetRef} formModalRef={modalRef} snapPoints={contactSnapPoints} onDismiss={() => bottomSheetRef.current?.setBodyContent(null)} />
    </React.Fragment>
  )
}

export default VideoNavHeaderComponent