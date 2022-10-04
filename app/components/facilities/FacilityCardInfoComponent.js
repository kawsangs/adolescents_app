import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import FacilityCardTitleComponent from './FacilityCardTitleComponent';
import FacilityCardViewMapButtonComponent from './FacilityCardViewMapButtonComponent';
import color from '../../themes/color';
import {descriptionFontSize} from '../../constants/component_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityCardInfoComponent = (props) => {
  const renderViewMapBtn = () => {
    return <FacilityCardViewMapButtonComponent/>
  }

  const renderTitle = () => {
    return <FacilityCardTitleComponent uuid={props.uuid} label={props.name} audio={props.audio}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
           />
  }

  return (
    <View style={{flex: 4}}>
      { renderTitle() }
      <View style={{flexDirection: 'row', flex: 1, marginTop: 8, paddingHorizontal: 8}}>
        <Text style={styles.label} numberOfLines={2}>{props.description}</Text>
        <Icon name="chevron-right" color={color.primaryColor} size={32} style={{alignSelf: 'center', marginTop: -6 }} />
      </View>
      { renderViewMapBtn() }
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
});

export default FacilityCardInfoComponent;