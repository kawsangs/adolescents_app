import React from 'react';
import {View, Image} from 'react-native';
import {Card} from 'react-native-paper';
import { useDispatch } from 'react-redux';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import {cardTitleFontSize, cardTitleLineHeight} from '../../constants/component_constant';
import visitService from '../../services/visit_service';
import {getStyleOfDevice} from '../../utils/responsive_util';
import {setPlayingAudio} from '../../features/audios/currentPlayingAudioSlice';

const ListViewCardComponent = (props) => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(setPlayingAudio(null));
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
          itemUuid={props.item.id}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
          rippled={true}
          containerStyle={{position: 'absolute', right: 2}}
        />
      </View>
      <View style={{paddingHorizontal: 8, paddingVertical: 10}}>
        <BoldLabelComponent label={props.item.name} numberOfLines={2} style={{fontSize: cardTitleFontSize, lineHeight: cardTitleLineHeight}} />
      </View>
    </Card>
  )
}

export default ListViewCardComponent;