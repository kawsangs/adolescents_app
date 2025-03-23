import React from 'react';
import { Text } from 'react-native-paper';
import {Ticker} from 'react-native-ticker-tape';
import { useSelector } from 'react-redux';

import {xxLargeFontSize} from '../../utils/font_size_util';
import {FontFamily} from '../../themes/font';
import color from '../../themes/color';

const AutoScrollLabelComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  return <Ticker msPerPX={50} loop={true}>
    <Text style={{color: appTheme.primary_text_color ?? color.whiteColor, fontSize: xxLargeFontSize(), fontFamily: FontFamily.bold, lineHeight: 34}}>
      {props.label}
    </Text>
  </Ticker>
}

export default AutoScrollLabelComponent;