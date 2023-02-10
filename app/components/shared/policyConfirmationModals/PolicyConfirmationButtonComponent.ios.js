import React from 'react';
import {TouchableOpacity} from 'react-native';

import BoldLabelComponent from '../BoldLabelComponent';
import color from '../../../themes/color';
import componentUtil from '../../../utils/component_util';
import {xLargeFontSize} from '../../../utils/font_size_util';
import {getStyleOfDevice} from '../../../utils/responsive_util';

const PolicyConfirmationModalComponent = (props) => {
  const colorSet = () => {
    return props.checked ? { btnColor: color.primaryColor, textColor: color.whiteColor }
                         : { btnColor: color.disabledColor, textColor: color.mutedColor }
  }

  return <TouchableOpacity onPress={() => props.saveUser()} disabled={!props.checked} style={[styles.btn, { backgroundColor: colorSet().btnColor }]}>
            <BoldLabelComponent label="យល់ព្រម" style={{fontSize: xLargeFontSize(), color: colorSet().textColor}} />
         </TouchableOpacity>
}

const styles = {
  btn: {
    alignItems: 'center',
    borderRadius: 40,
    height: getStyleOfDevice(componentUtil.tabletPressableItemSize(), componentUtil.mediumPressableItemSize()),
    justifyContent: 'center',
    marginTop: 16,
  }
}

export default PolicyConfirmationModalComponent;