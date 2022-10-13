import React from 'react';
import {Text} from 'react-native-paper';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import {xxLargeFontSize, largeFontSize} from '../../utils/font_size_util';

const FacilityDetailTitleComponent = (props) => {
  return <React.Fragment>
            <BoldLabelComponent label={props.name} style={{fontSize: xxLargeFontSize(), textAlign: 'center'}} />
            <Text style={{fontSize: largeFontSize(), textAlign: 'center', marginTop: 8}}>{props.address}</Text>
         </React.Fragment>
}

export default FacilityDetailTitleComponent;