import React from 'react';
import {Dimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

import color from '../../themes/color';
import {FontFamily} from '../../themes/font';
import {descriptionFontSize} from '../../utils/font_size_util';
import {descriptionLineHeight} from '../../constants/component_constant';

const HtmlRendererComponent = (props) => {
  return (
    <RenderHtml
      source={{ html: props.source }}
      contentWidth={Dimensions.get('screen').width}
      tagsStyles={tagsStyles}
    />
  )
}

const tagsStyles = {
  div: {
    color: color.blackColor,
    fontFamily: FontFamily.regular,
    fontSize: descriptionFontSize(),
    lineHeight: descriptionLineHeight,
  },
  p: {
    color: color.blackColor,
    fontFamily: FontFamily.regular,
    fontSize: descriptionFontSize(),
    lineHeight: descriptionLineHeight,
  },
  ul: {
    marginTop: 0
  },
  b: {
    color: color.blackColor,
    fontFamily: FontFamily.bold,
    fontSize: descriptionFontSize(),
  },
  strong: {
    color: color.blackColor,
    fontFamily: FontFamily.bold,
    fontSize: descriptionFontSize() + 1.5,
  },
  span: {
    color: color.blackColor,
    fontFamily: FontFamily.regular,
    fontSize: descriptionFontSize(),
    marginTop: -10,
    lineHeight: descriptionLineHeight,
  }
}

export default HtmlRendererComponent;