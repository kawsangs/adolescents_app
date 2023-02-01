import React from 'react';
import {View, StyleSheet} from 'react-native';

import BoldLabelComponent from '../BoldLabelComponent';
import CustomAudioPlayerButtonComponent from '../CustomAudioPlayerButtonComponent';
import {cardTitleFontSize} from '../../../constants/component_constant';
import componentUtil from '../../../utils/component_util';

const GridCardNoSubCategoryComponent = (props) => {
  const renderAudioBtn = () => {
    const btnSize = componentUtil.pressableItemSize();
    return <CustomAudioPlayerButtonComponent
              audio={props.audio}
              itemUuid={props.uuid}
              buttonHeight={btnSize}
              buttonWidth={btnSize}
              rippled={true}
              rippleHeight={btnSize}
              rippleWidth={btnSize}
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