import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import BoldLabelComponent from '../BoldLabelComponent';
import CardSubtitleLabelComponent from '../CardSubtitleLabelComponent';
import color from '../../../themes/color';
import {smallFontSize} from '../../../utils/font_size_util';

const CardWithSoundWaveInfoComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <BoldLabelComponent label={props.title} numberOfLines={1} />
        <CardSubtitleLabelComponent label={props.description} numberOfLines={2} labelStyle={{marginTop: 8}} />
      </View>
      <Icon name="chevron-right" color={color.primaryColor} size={32} style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  infoContainer: {
    flex: 1,
    paddingTop: 16
  },
  icon: {
    alignSelf: 'center',
    marginTop: -(smallFontSize() / 2)     // use the font size of audio duration / 2 = the label height
  }
});

export default CardWithSoundWaveInfoComponent;