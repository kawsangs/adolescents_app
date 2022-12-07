import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import  {PanGestureHandler, gestureHandlerRootHOC} from 'react-native-gesture-handler'
import YoutubePlayer from "react-native-youtube-iframe";

import youtubeHelper from '../../helpers/youtube_helper';

const ModalContent = gestureHandlerRootHOC((props) => {
  const exitVideo = () => {
    props.updateModalVisible(false)
  }

  return (
     <PanGestureHandler onGestureEvent={(evt) => exitVideo()} activeOffsetY={[-70, 70]}>
      <View style={{flex: 1}}>
        <YoutubePlayer
          height={'100%'}
          play={true}
          videoId={youtubeHelper.getVideoId(props.video.url)}
        />
      </View>
    </PanGestureHandler>
  )
})

const PlayVideoModalComponent = gestureHandlerRootHOC((props) => {
  return (
      <Modal
        animationType="slide"
        visible={ props.modalVisible }
        style={{backgroundColor: 'black'}}
      >
        <View style={styles.centeredView}>
          <View style={{height: 220, width: "100%"}}>
            { props.video &&
              <ModalContent updateModalVisible={(status) => props.setModalVisible(status)} video={props.video}/>
            }
          </View>
        </View>
      </Modal>
  )
})

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'back'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black'
  }
})

export default PlayVideoModalComponent;