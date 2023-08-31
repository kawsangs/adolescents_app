import React from 'react';
import { View } from 'react-native';
import {Card, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import CustomAudioPlayerButtonComponent from '../CustomAudioPlayerButtonComponent';
import color from '../../../themes/color';
import {cardElevation} from '../../../constants/component_constant';
import {getStyleOfDevice} from '../../../utils/responsive_util';
import sharedStyles from '../../../assets/stylesheets/shared/sharedStyles';
import tabletStyles from '../../../assets/stylesheets/tablet/topicListCardComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/topicListCardComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const TopicListCardComponent = (props) => {
  const renderAudioButton = () => {
    return (
      <View style={{height: 20, borderWidth: 0}}>
        <CustomAudioPlayerButtonComponent
          itemUuid={props.uuid}
          audio={props.audio}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
          accessibilityLabel={props.accessibilityLabel}
          rippled={true}
          containerStyle={[styles.btnContainer, sharedStyles.boxShadow]}
        />
      </View>
    )
  }

  const cardMarginTop = () => {
    if (props.hideAudio) return 16;

    return props.index == 0 ? 26 : 36
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.card, {marginTop: cardMarginTop()}]}
      onPress={() => props.onPress()}
    >
      <View style={{flexDirection: 'row', flex: 1, paddingHorizontal: 16}}>
        <View style={{flex: 1}}>
          { !props.hideAudio && renderAudioButton()}
          <View style={styles.labelContainer}>
            <Text numberOfLines={2} style={[styles.label, props.hideAudio && {paddingTop: 0 }]}>{props.name}</Text>
          </View>
        </View>
        <Icon name="chevron-right" color={color.primaryColor} size={32} style={{width: 25, alignSelf: 'center'}} />
      </View>
    </Card>
  )
}

export default TopicListCardComponent;