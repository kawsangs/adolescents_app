import React from 'react';
import TextTicker from 'react-native-text-ticker';
import {xxLargeFontSize} from '../../utils/font_size_util';
import {FontFamily} from '../../themes/font';
import color from '../../themes/color';

const AutoScrollLabelComponent = (props) => {
  return <TextTicker
            style={{color: color.whiteColor, fontSize: xxLargeFontSize(), fontFamily: FontFamily.bold}}
            loop
            bounce={false}
            repeatSpacer={60}
            marqueeDelay={2000}
            scrollSpeed={20}
            shouldAnimateTreshold={16}
         >
            {props.label}
         </TextTicker>
}

export default AutoScrollLabelComponent;