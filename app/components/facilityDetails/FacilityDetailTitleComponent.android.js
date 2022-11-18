import React from 'react';
import {Text} from 'react-native-paper';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import {xLargeFontSize} from '../../utils/font_size_util';
import {descriptionFontSize} from '../../constants/component_constant';

const FacilityDetailTitleComponent = (props) => {
  return <React.Fragment>
            <BoldLabelComponent label={props.name} style={{fontSize: xLargeFontSize(), textAlign: 'center'}} />
            <Text style={{fontSize: descriptionFontSize, textAlign: 'center', marginTop: 8, lineHeight: 26}}>{props.addresses}</Text>
         </React.Fragment>
}

export default FacilityDetailTitleComponent;