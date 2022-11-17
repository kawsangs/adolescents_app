import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import FacilityCardTitleComponent from './FacilityCardTitleComponent';
import FacilityViewRouteButtonComponent from '../shared/FacilityViewRouteButtonComponent';
import color from '../../themes/color';
import {descriptionFontSize} from '../../constants/component_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';
import componentUtil from '../../utils/component_util';
import {largeFontSize, mediumFontSize} from '../../utils/font_size_util';

const FacilityCardInfoComponent = (props) => {
  const viewRouteColor = () => {
    return !props.latitude || !props.longitude ? color.mutedColor : color.primaryColor;
  }

  const renderViewMapBtn = () => {
    return <FacilityViewRouteButtonComponent uuid={props.uuid} iconSize={18} iconColor={viewRouteColor()} textColor={color.primaryColor}
              latitude={props.latitude} longitude={props.longitude}
              buttonStyle={styles.viewRouteBtn} labelStyle={[styles.viewRouteLabel, {color: viewRouteColor()}]}
           />
  }

  const renderTitle = () => {
    return <FacilityCardTitleComponent uuid={props.uuid} label={props.name} audio={props.audio}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
           />
  }

  const renderServices = () => {
    if (props.services.length == 0) return;

    let label = ""
    props.services.map((service, index) => {
      label += `${service}${index < props.services.length - 1 ? ', ' : ''}`
    });
    return <Text style={{color: '#b5b5b5', flex: 1, fontSize: mediumFontSize()}} numberOfLines={1}>{label}</Text>
  }

  return (
    <View style={{flex: 4}}>
      { renderTitle() }
      <View style={{flexDirection: 'row', flex: 1, marginTop: 8, paddingHorizontal: 8}}>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          {renderServices()}
        </View>
        <Icon name="chevron-right" color={color.primaryColor} size={32} style={{alignSelf: 'center', marginTop: -10 }} />
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
  viewRouteBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: componentUtil.pressableItemSize(),
  },
  viewRouteLabel: {
    fontSize: largeFontSize(),
    marginLeft: 12
  }
});

export default FacilityCardInfoComponent;