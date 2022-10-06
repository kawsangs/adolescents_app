import React from 'react';
import {Appbar} from 'react-native-paper';
import NavigationHeaderTitleComponent from './navigationHeaders/NavigationHeaderTitleComponent';

import {getStyleOfDevice} from '../../utils/responsive_util';

const NavigationHeaderComponent = (props) => {
  return (
    <Appbar.Header style={[{paddingHorizontal: getStyleOfDevice(14, 0)}, props.headerStyle]}>
      { props.leftButton }
      { !!props.customTitle ?
        props.customTitle
        :
        <NavigationHeaderTitleComponent label={props.label} />
      }
      { !!props.rightButton && props.rightButton }
    </Appbar.Header>
  )
}

export default NavigationHeaderComponent;