import React from 'react';
import {Text} from 'react-native-paper';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import {xxLargeFontSize, xLargeFontSize} from '../../utils/font_size_util';

const FacilityDetailTitleComponent = (props) => {
  return <React.Fragment>
            <BoldLabelComponent label={props.name} style={{fontSize: xxLargeFontSize(), textAlign: 'center'}} />
            <Text style={{fontSize: xLargeFontSize(), textAlign: 'center', marginTop: 8}}>{props.address}</Text>
         </React.Fragment>
}

export default FacilityDetailTitleComponent;