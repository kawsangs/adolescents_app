import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

import BoldLabelComponent from '../BoldLabelComponent';
import CardPointAndAudioFooterComponent from '../CardPointAndAudioFooterComponent';
import {getStyleOfDevice} from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/horizontalCardInfoComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/horizontalCardInfoComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HorizontalCardInfoComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BoldLabelComponent label={props.title} numberOfLines={2} style={styles.title} />
      </View>
      <View style={{flex: 2}}>
        <Text style={{lineHeight: 21, color: '#333333'}}>{props.description}</Text>
      </View>

      <TouchableOpacity style={{backgroundColor: '#1b91f7', width: 64, justifyContent: 'center', alignItems: 'center', paddingVertical: 6, borderRadius: 6, alignSelf: 'flex-end', marginBottom: 10, marginRight: 6}}>
        <Text style={{color: 'white'}}>ចាប់ផ្ដើម</Text>
      </TouchableOpacity>

      {/* <CardPointAndAudioFooterComponent uuid={props.uuid} index={props.index} points={props.points} audio={props.audio} playingUuid={props.playingUuid}
        updatePlayingUuid={props.updatePlayingUuid}
      /> */}
    </View>
  )
}

export default HorizontalCardInfoComponent;