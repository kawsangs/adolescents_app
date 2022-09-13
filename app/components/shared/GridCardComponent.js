import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

import BoldLabelComponent from './BoldLabelComponent';
import CardPointAndAudioFooterComponent from './CardPointAndAudioFooterComponent';
import {cardBorderRadius, cardElevation, cardTitleFontSize} from '../../constants/component_constant';
import Category from '../../models/Category';
import navigationHelper from '../../helpers/navigation_helper';

const GridCardComponent = (props) => {
  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => navigationHelper.navigateCategory(props.item.uuid)}
    >
      <Image source={props.item.image_url} resizeMode='contain' style={styles.image} />

      <View style={styles.infoContainer}>
        <BoldLabelComponent label={props.item.name} numberOfLines={2} style={{fontSize: cardTitleFontSize}} />

        <CardPointAndAudioFooterComponent
          uuid={props.item.uuid}
          points={Category.getSubCategories(props.item.uuid).length}
          audio={props.item.audio_url}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
        />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: cardBorderRadius,
    elevation: cardElevation,
    width: '48%',
  },
  infoContainer: {
    marginTop: 8,
    paddingHorizontal: 8,
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius,
    height: 90,
    width: '100%',

  }
});

export default GridCardComponent;