import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Card, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import CustomAudioPlayerButtonComponent from '../CustomAudioPlayerButtonComponent';
import color from '../../../themes/color';
import {cardBorderRadius, cardElevation, descriptionFontSize} from '../../../constants/component_constant';
import componentUtil from '../../../utils/component_util';
import audioUtil from '../../../utils/audio_util';
import {isLowPixelDensityDevice, getStyleOfDevice} from '../../../utils/responsive_util';

const TopicListCardComponent = (props) => {
  const renderAudioButton = () => {
    const btnSize = componentUtil.pressableItemSize();
    return (
      <View style={{height: 20, borderWidth: 0}}>
        <CustomAudioPlayerButtonComponent
          itemUuid={props.uuid}
          audio={audioUtil.getAudioSourceByFilePath(props.audio)}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
          accessibilityLabel={props.accessibilityLabel}
          buttonHeight={btnSize}
          buttonWidth={btnSize}
          rippled={true}
          rippleHeight={btnSize}
          rippleWidth={btnSize}
          hasShadow={true}
          containerStyle={styles.btnContainer}
        />
      </View>
    )
  }

  const cardMarginTop = () => {
    if (props.hideAudio) return 16;

    return props.index == 0 ? 26 : 36
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={{marginTop: cardMarginTop(), borderRadius: cardBorderRadius, height: getStyleOfDevice(94 , isLowPixelDensityDevice() ? 84 : 94)}}
      onPress={() => props.onPress()}
    >
      <View style={{flexDirection: 'row', flex: 1, paddingHorizontal: 16}}>
        <View style={{flex: 1}}>
          { !props.hideAudio && renderAudioButton()}
          <View style={{height: '100%', position: 'absolute', width: '100%', zIndex: -1, justifyContent: 'center', paddingLeft: 2}}>
            <Text numberOfLines={2} style={{fontSize: descriptionFontSize, lineHeight: 26, paddingTop: props.hideAudio ? 0 : 10}}>{props.name}</Text>
          </View>
        </View>
        <Icon name="chevron-right" color={color.primaryColor} size={32} style={{width: 25, alignSelf: 'center'}} />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    top: -25,
    zIndex: 10,
  },
  btn: {
    height: componentUtil.pressableItemSize(),
    width: componentUtil.pressableItemSize(),
  },
});

export default TopicListCardComponent;