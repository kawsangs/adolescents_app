import React from 'react';
import {View, StyleSheet} from 'react-native';

import BoldLabelComponent from '../BoldLabelComponent';
import CardPointAndAudioFooterComponent from '../CardPointAndAudioFooterComponent';
import {cardTitleFontSize} from '../../../constants/component_constant';
import Category from '../../../models/Category';

const GridCardWithSubCategoryComponent = (props) => {
  return <View style={styles.container}>
            <BoldLabelComponent label={props.title} numberOfLines={2} style={{fontSize: cardTitleFontSize}} />
            <CardPointAndAudioFooterComponent
              uuid={props.uuid}
              index={props.index}
              points={Category.getSubCategories(props.id).length}
              audio={props.audio}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
            />
          </View>
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 8,
    flex: 1,
    justifyContent: 'flex-end',
  }
});

export default GridCardWithSubCategoryComponent;