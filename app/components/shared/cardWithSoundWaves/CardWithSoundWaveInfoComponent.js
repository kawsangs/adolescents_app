import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import BoldLabelComponent from '../BoldLabelComponent';
import CardSubtitleLabelComponent from '../CardSubtitleLabelComponent';
import color from '../../../themes/color';
import {smallFontSize} from '../../../utils/font_size_util';
import {cardTitleFontSize} from '../../../constants/component_constant';

const CardWithSoundWaveInfoComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <BoldLabelComponent label={props.title} numberOfLines={2} style={{fontSize: cardTitleFontSize}} />
        <CardSubtitleLabelComponent label={props.description} numberOfLines={2} labelStyle={{marginTop: 8}} />
      </View>
      <Icon name="chevron-right" color={color.primaryColor} size={32} style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    paddingTop: 8
  },
  icon: {
    alignSelf: 'center',
    marginTop: -((smallFontSize() / 2) + 5),     // use the font size of audio duration / 2 then + 5 = the label height
    width: 24
  }
});

export default CardWithSoundWaveInfoComponent;