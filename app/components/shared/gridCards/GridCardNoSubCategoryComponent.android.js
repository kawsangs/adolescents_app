import React from 'react';
import {View, StyleSheet} from 'react-native';

import BoldLabelComponent from '../BoldLabelComponent';
import CustomAudioPlayerButtonComponent from '../CustomAudioPlayerButtonComponent';
import {cardTitleFontSize} from '../../../constants/component_constant';

const GridCardNoSubCategoryComponent = (props) => {
  const renderAudioBtn = () => {
    return <CustomAudioPlayerButtonComponent
              audio={props.audio}
              itemUuid={props.uuid}
              rippled={true}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
              accessibilityLabel={`កាតទី${props.order}`}
           />
  }

  return <View style={styles.container}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <BoldLabelComponent label={props.title} numberOfLines={2} style={{fontSize: cardTitleFontSize, lineHeight: 25}} />
            </View>
            {renderAudioBtn()}
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