import React, {useEffect, useState} from 'react';
import { Animated, View, ScrollView, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import YoutubePopupPlayer from 'react-native-youtube-popup-player';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BoldLabelComponent from './BoldLabelComponent';
import ScrollViewHeaderComponent from './scrollViewWithAudios/ScrollViewHeaderComponent';
import HtmlDescriptionComponent from './HtmlDescriptionComponent';
import SourceLinksComponent from './SourceLinksComponent';
import FacilityHorizontalListComponent from './FacilityHorizontalListComponent';
import VideoHorizontalListComponent from './VideoHorizontalListComponent';
import color from '../../themes/color';
import { scrollViewPaddingBottom } from '../../constants/component_constant';
import { headerWithAudioMaxHeight } from '../../constants/android_component_constant';
import categoryHelper from '../../helpers/category_helper';
import Video from '../../models/Video';
import networkService from '../../services/network_service';
import {xLargeFontSize} from '../../utils/font_size_util';

const ScrollViewWithAudioComponent = (props) => {
  const scrollY = new Animated.Value(0);
  const [textSize, setTextSize] = useState(props.defaultTextSize);
  const [hasInternet, setHasInternet] = useState(true);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (hasInternet != state.isInternetReachable)
        setHasInternet(state.isInternetReachable);
    });

    return () => { unsubscribeNetInfo && unsubscribeNetInfo() }
  }, []);

  const playVideo = (videoUuid) => {
    networkService.checkConnection(() => setHasInternet(true), () => setHasInternet(false));
    setPlayingVideo(Video.findByUuid(videoUuid));
    setModalVisible(true);
  }

  const renderContent = () => {
    // console.log('Videos = ', categoryHelper.getVideosByTagList(props.tagList))
    console.log('Taglist = ', Video.getAll())
    // console.log('Taglist = ', props.tagList)

    return (
      <View style={styles.scrollViewContent}>
        <BoldLabelComponent label={props.title} style={{color: color.blackColor, fontSize: parseFloat(textSize) + 2, marginTop: 14, lineHeight: 30, marginBottom: 10}} />
        <HtmlDescriptionComponent source={props.description} textSize={textSize} />
        { props.sources.length > 0 && <SourceLinksComponent sources={props.sources} textSize={textSize} /> }
        <FacilityHorizontalListComponent facilities={categoryHelper.getFacilitiesByTagList(props.tagList)} />
        <VideoHorizontalListComponent videos={categoryHelper.getVideosByTagList(props.tagList)} playVideo={playVideo} />
      </View>
    )
  }

  return (
    <View style={{flexGrow: 1}}>
      <ScrollViewHeaderComponent title={props.title} image={props.image} audio={props.audio} uuid={props.uuid} scrollY={scrollY} textSize={textSize} updateTextSize={(textSize) => setTextSize(textSize)} />
      <ScrollView style={{flexGrow: 1, backgroundColor: color.whiteColor}} scrollEventThrottle={16}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], { useNativeDriver: false })}
      >
        { renderContent() }
      </ScrollView>

      <YoutubePopupPlayer
        videoUrl={!!playingVideo ? playingVideo.url : null}
        modalVisible={modalVisible}
        hasInternet={hasInternet}
        playerPaddingTop={hp('34%')}
        messageLabelStyle={{fontSize: xLargeFontSize()}}
        closeModal={() => setModalVisible(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    backgroundColor: color.whiteColor,
    marginTop: headerWithAudioMaxHeight,
    paddingHorizontal: 24,
    paddingBottom: scrollViewPaddingBottom,
  }
});

export default ScrollViewWithAudioComponent;