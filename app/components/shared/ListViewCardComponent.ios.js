import React from 'react';
import {View, Image} from 'react-native';
import {Card, Text} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import {cardTitleFontSize, cardTitleLineHeight} from '../../constants/component_constant';
import visitService from '../../services/visit_service';
import {getStyleOfDevice} from '../../utils/responsive_util';
import {setPlayingAudio} from '../../features/audios/currentPlayingAudioSlice';
import Category from '../../models/Category';
import translationHelper from '../../helpers/translation_helper';
import tabletStyles from '../../assets/stylesheets/tablet/cardPointAndAudioFooterComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/cardPointAndAudioFooterComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const ListViewCardComponent = (props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const points = Category.getSubCategories(props.item.id).length;
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
          itemUuid={props.item.uuid}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
          rippled={true}
          containerStyle={{position: 'absolute', right: 2}}
        />
      </View>
      <View style={{paddingHorizontal: 8, paddingVertical: 10}}>
        <BoldLabelComponent label={props.item.name} numberOfLines={2} style={{fontSize: cardTitleFontSize, lineHeight: cardTitleLineHeight}} />
        { points > 0 && <Text style={[styles.label, {marginTop: 2}]}>{translationHelper.translateNumber(points, t)} { t(props.pointPostfix || 'point', {count: parseInt(props.points)})}</Text> }
      </View>
    </Card>
  )
}

export default ListViewCardComponent;