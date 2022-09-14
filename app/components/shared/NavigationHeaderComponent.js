import React from 'react';
import {Appbar} from 'react-native-paper';
import NavigationHeaderTitleComponent from './navigationHeaders/NavigationHeaderTitleComponent';

const NavigationHeaderComponent = (props) => {
  return (
    <Appbar.Header style={{elevation: 0, paddingHorizontal: 0}}>
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