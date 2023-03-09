import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import NavigationHeaderButtonComponent from '../shared/navigationHeaders/NavigationHeaderButtonComponent';
import NotifyBadgeComponent from '../shared/NotifyBadgeComponent';
import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import VideoFilterBottomSheetComponent from './VideoFilterBottomSheetComponent';
import {navigationHeaderIconSize} from '../../constants/component_constant';
import {videoFilterSnapPoints} from '../../constants/modal_constant';

const VideoNavHeaderComponent = (props) => {
  const {t} = useTranslation();
  const selectedVidAuthor = useSelector(state => state.filterVideoAuthor);
  let bottomSheetRef = React.createRef();
  let modalRef = React.createRef();
  const filterBtn = () => {
    return (
      <View style={{position: 'relative'}}>
        <NavigationHeaderButtonComponent onPress={() => showAuthorList()} icon={<IonIcon name="options-outline" size={navigationHeaderIconSize} color="white"/>} />
        {!!selectedVidAuthor.uuid && <NotifyBadgeComponent right={10} top={15} />}
      </View>
    )
  }

  const showAuthorList = () => {
    bottomSheetRef.current?.setBodyContent(<VideoFilterBottomSheetComponent closeBottomSheet={() => modalRef.current?.dismiss()} />)
    modalRef.current?.present()
  }

  return (
    <React.Fragment>
      <NavigationHeaderComponent leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>} label={t('video')}
        rightButton={filterBtn()}
      />
      <FormBottomSheetModalComponent ref={bottomSheetRef} formModalRef={modalRef} snapPoints={videoFilterSnapPoints} onDismiss={() => bottomSheetRef.current?.setBodyContent(null)} />
    </React.Fragment>
  )
}

export default VideoNavHeaderComponent