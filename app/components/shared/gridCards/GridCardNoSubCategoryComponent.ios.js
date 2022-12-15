import React from 'react';
import {View, StyleSheet} from 'react-native';

import BoldLabelComponent from '../BoldLabelComponent';
import AudioWaveButtonComponent from '../AudioWaveButtonComponent';
import {cardTitleFontSize} from '../../../constants/component_constant';
import componentUtil from '../../../utils/component_util';

const GridCardNoSubCategoryComponent = (props) => {
  return <View style={styles.container}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <BoldLabelComponent label={props.title} numberOfLines={2} style={{fontSize: cardTitleFontSize, lineHeight: 25}} />
              </View>
              <AudioWaveButtonComponent
                itemUuid={props.uuid}
                audio={props.audio}
                playingUuid={props.playingUuid}
                isSpeakerIcon={true}
                containerStyle={{borderWidth: 0, zIndex: 10}}
                updatePlayingUuid={props.updatePlayingUuid}
                btnStyle={{elevation: 0, height: componentUtil.pressableItemSize(), width: componentUtil.pressableItemSize()}}
                accessibilityLabel={`កាតទី${props.order}`}
              />
           </View>
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
    paddingHorizontal: 8,
  }
});

export default GridCardNoSubCategoryComponent;