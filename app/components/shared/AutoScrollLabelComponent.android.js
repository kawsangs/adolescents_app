import React from 'react';
import { Text } from 'react-native-paper';
import {Ticker} from 'react-native-ticker-tape';

import {xxLargeFontSize} from '../../utils/font_size_util';
import {FontFamily} from '../../themes/font';
import color from '../../themes/color';

const AutoScrollLabelComponent = (props) => {
  return <Ticker msPerPX={50} loop={true}>
    <Text style={{color: color.whiteColor, fontSize: xxLargeFontSize(), fontFamily: FontFamily.bold, lineHeight: 30}}>
      {props.label}
    </Text>
  </Ticker>
}

export default AutoScrollLabelComponent;