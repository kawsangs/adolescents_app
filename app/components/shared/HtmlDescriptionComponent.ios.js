import React from 'react';
import {Dimensions} from 'react-native';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';

import color from '../../themes/color';
import {FontFamily} from '../../themes/font';
import {descriptionLineHeight} from '../../constants/component_constant';

const systemFonts = [...defaultSystemFonts, FontFamily.regular, FontFamily.bold];

const HtmlRendererComponent = (props) => {
  const tagsStyles = {
    div: {
      color: color.blackColor,
      fontFamily: FontFamily.regular,
      fontSize: parseFloat(props.textSize),
      lineHeight: descriptionLineHeight,
    },
    p: {
      color: color.blackColor,
      fontFamily: FontFamily.regular,
      fontSize: parseFloat(props.textSize),
      lineHeight: descriptionLineHeight,
    },
    ul: {
      marginTop: 0
    },
    b: {
      color: color.blackColor,
      fontFamily: FontFamily.bold,
      fontSize: parseFloat(props.textSize),
    },
    strong: {
      color: color.blackColor,
      fontFamily: FontFamily.bold,
      fontSize: parseFloat(props.textSize) + 1.5,
    },
    span: {
      color: color.blackColor,
      fontFamily: FontFamily.regular,
      fontSize: parseFloat(props.textSize),
      marginTop: -10,
      lineHeight: descriptionLineHeight,
    }
  }

  return (
    <RenderHtml
      source={{ html: props.source }}
      contentWidth={Dimensions.get('screen').width}
      tagsStyles={tagsStyles}
      systemFonts={systemFonts}
    />
  )
}

export default HtmlRendererComponent;