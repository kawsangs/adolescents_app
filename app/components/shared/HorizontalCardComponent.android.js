import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import { useDispatch } from 'react-redux';

import HorizontalCardImageComponent from './horizontalCard/HorizontalCardImageComponent';
import HorizontalCardInfoComponent from './horizontalCard/HorizontalCardInfoComponent';
import { cardElevation } from '../../constants/component_constant';
import Category from '../../models/Category';
import visitService from '../../services/visit_service';
import categoryHelper from '../../helpers/category_helper';
import { getStyleOfDevice } from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/horizontalCardComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/horizontalCardComponentStyles';
import {setPlayingAudio} from '../../features/audios/currentPlayingAudioSlice';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HorizontalCardComponent = (props) => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(setPlayingAudio(null));
    props.updatePlayingUuid(null);
    visitService.recordVisitCategory(props.item)
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => onPress()}
    >
      <View style={{flex: 1, flexDirection: 'row'}}>
        <HorizontalCardImageComponent image={categoryHelper.getFileByUrl(props.item.image_url, 'image')} />
        <HorizontalCardInfoComponent
          uuid={props.item.id}
          title={props.item.name}
          index={props.index}
          points={Category.getSubCategories(props.item.id).length}
          audio={categoryHelper.getFileByUrl(props.item.audio_url, 'audio')}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
        />
      </View>
    </Card>
  )
}

export default HorizontalCardComponent;