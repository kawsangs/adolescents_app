import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

import BoldLabelComponent from './BoldLabelComponent';
import CardPointAndAudioFooterComponent from './CardPointAndAudioFooterComponent';
import AudioWaveButtonComponent from './AudioWaveButtonComponent';
import {cardBorderRadius, cardElevation, cardTitleFontSize} from '../../constants/component_constant';
import Category from '../../models/Category';
import visitService from '../../services/visit_service';
import componentUtil from '../../utils/component_util';

const GridCardComponent = (props) => {
  const points = Category.getSubCategories(props.item.uuid).length;
  const renderTitleAndAudio =  () => {
    return <View style={styles.titleWithAudioContainer}>
              <View style={{flex: 1}}>
                <BoldLabelComponent label={props.item.name} numberOfLines={2} style={{fontSize: cardTitleFontSize}} />
              </View>
              <AudioWaveButtonComponent
                itemUuid={props.uuid}
                audio={props.audio}
                playingUuid={props.playingUuid}
                isSpeakerIcon={true}
                containerStyle={{borderWidth: 0, zIndex: 10}}
                updatePlayingUuid={props.updatePlayingUuid}
                btnStyle={{elevation: 0, height: componentUtil.pressableItemSize(), width: componentUtil.pressableItemSize()}}
              />
           </View>
  }

  const renderTitleWithSubCategory = () => {
    return <View style={styles.titleWithSubCategoryContainer}>
              <BoldLabelComponent label={props.item.name} numberOfLines={2} style={{fontSize: cardTitleFontSize}} />
              <CardPointAndAudioFooterComponent
                uuid={props.item.uuid}
                points={Category.getSubCategories(props.item.uuid).length}
                audio={props.item.audioSource}
                playingUuid={props.playingUuid}
                updatePlayingUuid={props.updatePlayingUuid}
              />
           </View>
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => visitService.recordVisitCategory(props.item)}
    >
        <Image source={props.item.imageSource} resizeMode='cover' style={styles.image} />
      { points > 0 ? renderTitleWithSubCategory() : renderTitleAndAudio() }
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: cardBorderRadius,
    elevation: cardElevation,
    width: '48%',
    paddingLeft: 0
  },
  titleWithSubCategoryContainer: {
    marginTop: 8,
    paddingHorizontal: 8,
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius,
    // height: 105,
    height: 100,
    width: '100%',
  },
  titleWithAudioContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
    paddingHorizontal: 8,
  }
});

export default GridCardComponent;