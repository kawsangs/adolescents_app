import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import YoutubePlayer from "react-native-youtube-iframe";

import PlayVideoWarningMessageComponent from './PlayVideoWarningMessageComponent';
import color from '../../themes/color';
import youtubeHelper from '../../helpers/youtube_helper';

const PlayVideoModalComponent = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const renderContent = () => {
    if (!!props.video.url && props.hasInternet)
      return (
        <View style={{height: '100%', width: "100%", justifyContent: 'center', borderWidth: 0.1, borderColor: 'transparent'}}>
          { props.hasInternet && isLoading &&
            <ActivityIndicator size="large" color={color.whiteColor} style={{position: 'absolute', alignSelf: 'center'}} />
          }
          <YoutubePlayer
            height={230}
            play={true}
            videoId={youtubeHelper.getVideoId(props.video.url)}
            onReady={() => setIsLoading(false)}
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
      style={{width: '100%', marginHorizontal: 0, marginVertical: 0}}
      backdropColor='black'
      backdropOpacity={0.8}
    >
      { !!props.video && renderContent()}
    </Modal>
  )
}

export default PlayVideoModalComponent;