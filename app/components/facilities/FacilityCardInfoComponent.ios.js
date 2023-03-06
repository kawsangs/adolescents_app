import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {cardTitleFontSize} from '../../constants/component_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';
import {largeFontSize, mediumFontSize} from '../../utils/font_size_util';

const FacilityCardInfoComponent = (props) => {
  const [titleLine, setTitleLine] = React.useState(0);
  const renderServices = () => {
    if (props.services.length == 0) return;

    let label = ""
    props.services.map((service, index) => {
      label += `${service}${index < props.services.length - 1 ? ', ' : ''}`
    });
    return <Text style={{color: '#b5b5b5', flex: 1, fontSize: mediumFontSize(), marginTop: 2}} numberOfLines={1}>{label}</Text>
  }

  const onTextLayout = React.useCallback(e => {
    setTitleLine(e.nativeEvent.lines.length)
  }, []);

  return (
    <View style={{flex: 4, flexDirection: 'row', paddingRight: 4}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <BoldLabelComponent label={props.name} numberOfLines={2} style={[styles.title, titleLine > 1 && {lineHeight: getStyleOfDevice(26, 23)}]} onTextLayout={onTextLayout} />
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 8}}>
          {renderServices()}
        </View>
      </View>
      <FeatherIcon name="chevron-right" color={color.primaryColor} size={32} style={{alignSelf: 'center'}} />
    </View>
  )
}

const styles = StyleSheet.create({
  viewRouteLabel: {
    fontSize: largeFontSize(),
    marginLeft: 12
  },
  title: {
    fontSize: cardTitleFontSize,
    flex: 1,
    paddingLeft: 8,
    textAlignVertical: 'center',
    marginBottom: 6
  },
});

export default FacilityCardInfoComponent;