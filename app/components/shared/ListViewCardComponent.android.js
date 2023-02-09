import React from 'react';
import {View, Image} from 'react-native';
import {Card, Text} from 'react-native-paper';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import {cardTitleFontSize} from '../../constants/component_constant';
import visitService from '../../services/visit_service';
import {getStyleOfDevice} from '../../utils/responsive_util';

const ListViewCardComponent = (props) => {
  const onPress = () => {
    props.updatePlayingUuid(null);
    visitService.recordVisitCategory(props.item);
  }

  return (
    <Card mode="elevated" elevation={cardElevation}
      style={{marginTop: 16, flexGrow: 1, borderRadius: cardBorderRadius}}
      onPress={() => onPress()}
    >
      <View>
        <Image source={props.item.imageSource} resizeMode='contain' style={{width: '100%', height: getStyleOfDevice(150, 120)}} />

        <CustomAudioPlayerButtonComponent
          audio={props.item.audioSource}
          itemUuid={props.item.uuid}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
          rippled={true}
          containerStyle={{position: 'absolute', right: 2}}
        />
      </View>
      <View style={{paddingHorizontal: 8, paddingVertical: 10}}>
        <BoldLabelComponent label={props.item.name} numberOfLines={2} style={{fontSize: cardTitleFontSize, lineHeight: 25}} />
      </View>
    </Card>
  )
}

export default ListViewCardComponent;