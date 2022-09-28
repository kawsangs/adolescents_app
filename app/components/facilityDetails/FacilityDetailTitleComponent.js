import React from 'react';
import {Text} from 'react-native-paper';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import {xxLargeFontSize, largeFontSize} from '../../utils/font_size_util';

const FacilityDetailTitleComponent = () => {
  return <React.Fragment>
            <BoldLabelComponent label="គ្លីនិកសុខភាពឯកទេសកម្ពុជា" style={{fontSize: xxLargeFontSize(), textAlign: 'center'}} />
            <Text style={{fontSize: largeFontSize(), textAlign: 'center', marginTop: 8}}>ផ្លូវ 310, ខ័ណ្ឌមានជ័យ រាជធានីភ្នំពេញ</Text>
         </React.Fragment>
}

export default FacilityDetailTitleComponent;