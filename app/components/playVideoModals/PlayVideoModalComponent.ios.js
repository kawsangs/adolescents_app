import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import YoutubePlayer from "react-native-youtube-iframe";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DeviceInfo from 'react-native-device-info';

import PlayVideoWarningMessageComponent from './PlayVideoWarningMessageComponent';
import color from '../../themes/color';
import youtubeHelper from '../../helpers/youtube_helper';

const PlayVideoModalComponent = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const renderContent = () => {
    if (!!props.video.url && props.hasInternet)
      return (
        <View style={{height: '100%', width: "100%", justifyContent: 'center'}}>
          { props.hasInternet && isLoading &&
            <ActivityIndicator size="large" color={color.whiteColor} style={{position: 'absolute', alignSelf: 'center'}} />
          }
          <YoutubePlayer
            height={'100%'}
            play={true}
            videoId={youtubeHelper.getVideoId(props.video.url)}
            onReady={() => setIsLoading(false)}
            webViewProps={{
              containerStyle: {paddingTop: hp(DeviceInfo.hasNotch() ? '34%' : '30%')}
            }}
          />
        </View>
      )

    return <PlayVideoWarningMessageComponent hasInternet={props.hasInternet} closeModal={() => props.setModalVisible(false)} />
  }

  const onSwipeMove = (percentageShown) => {
    if (percentageShown <= 0.81)
      props.setModalVisible(false)
  }

  return (
    <Modal
      isVisible={props.modalVisible}
      onSwipeMove={(percentageShown) => onSwipeMove(percentageShown)}
      useNativeDriverForBackdrop
      swipeDirection={['down', 'up']}
      style={{width: '100%', margin: 0}}
      backdropColor='black'
      backdropOpacity={0.8}
      animationOut="zoomOut"
    >
      { !!props.video && renderContent()}
    </Modal>
  )
}

export default PlayVideoModalComponent;