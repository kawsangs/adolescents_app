import React from 'react';
import { View } from 'react-native';
import color from '../../themes/color';

const DashedLine = (props) => {
  return <View style={[{position: 'relative'}, props.containerStyle]}>
            <View style={{flex: 1, borderColor: color.lightGrayColor, borderWidth: 2, borderStyle: 'dashed', borderRadius: 1}}/>
            <View style={{position: 'absolute', width: '100%', backgroundColor: color.whiteColor, height: 4, bottom: -1.2}}/>
         </View>
}

export default DashedLine;