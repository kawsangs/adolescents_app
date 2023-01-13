import React from 'react';
import {BottomSheetPicker} from 'react-native-bottom-sheet-picker';

import color from '../../themes/color';
import {FontFamily} from '../../themes/font';
import {titleFontSize, bottomSheetTitleFontSize, itemFontSize} from '../../constants/bottom_sheet_picker_constant';

const CustomBottomSheetPickerComponent = (props) => {
  return <BottomSheetPicker
            {...props}
            primaryColor={color.primaryColor}
            secondaryColor={color.secondaryColor}
            titleStyle={[{marginBottom: 5, fontSize: titleFontSize}, props.titleStyle]}
            pickerBoxStyle={{paddingRight: 4}}
            bottomSheetTitleStyle={{fontSize: bottomSheetTitleFontSize, fontFamily: FontFamily.bold}}
            placeholderStyle={{fontSize: itemFontSize, alignSelf: 'center'}}
            itemTextStyle={{fontSize: itemFontSize}}
          />
}

export default CustomBottomSheetPickerComponent;