import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import FacilityCardAudioComponent from './FacilityCardAudioComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import {cardTitleFontSize, descriptionFontSize} from '../../constants/component_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';
import {largeFontSize, mediumFontSize} from '../../utils/font_size_util';

const FacilityCardInfoComponent = (props) => {
  const renderServices = () => {
    if (props.services.length == 0) return;

    let label = ""
    props.services.map((service, index) => {
      label += `${service}${index < props.services.length - 1 ? ', ' : ''}`
    });
    return <Text style={{color: '#b5b5b5', flex: 1, fontSize: mediumFontSize()}} numberOfLines={1}>{label}</Text>
  }

  return (
    <View style={{flex: 4, flexDirection: 'row'}}>
      <View style={{flex: 1, paddingTop: 8}}>
        <View style={{flexDirection: 'row'}}>
          <BoldLabelComponent label={props.name} numberOfLines={2} style={styles.title} />
        </View>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', paddingHorizontal: 8}}>
          {renderServices()}
        </View>
      </View>
      <FacilityCardAudioComponent audio={props.audio} playingUuid={props.playingUuid} updatePlayingUuid={props.updatePlayingUuid} />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: descriptionFontSize,
    flex: 1,
    lineHeight: getStyleOfDevice(27, 25),
    marginRight: 8,
  },
  viewRouteLabel: {
    fontSize: largeFontSize(),
    marginLeft: 12
  },
  title: {
    fontSize: cardTitleFontSize,
    flex: 1,
    paddingLeft: 8,
    textAlignVertical: 'center',
  },
});

export default FacilityCardInfoComponent;