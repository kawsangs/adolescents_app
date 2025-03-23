import React from 'react';
import {BottomSheetPicker} from 'react-native-bottom-sheet-picker';
import { useSelector } from 'react-redux';

import color from '../../themes/color';
import {FontFamily} from '../../themes/font';
import {titleFontSize, bottomSheetTitleFontSize, itemFontSize} from '../../constants/bottom_sheet_picker_constant';
import {defaultPickerContentHeight} from '../../constants/modal_constant';

const CustomBottomSheetPickerComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  const colorSet = (type) => {
    const colors = {
      background: props.disabled ? color.disabledCardColor : color.whiteColor,
      primary: props.disabled ? color.grayColor : (appTheme.primary_color ?? color.primaryColor),
      text: props.disabled ? color.grayColor : color.blackColor,
    }
    return colors[type];
  }

  return <BottomSheetPicker
            {...props}
            primaryColor={colorSet('primary')}
            secondaryColor={appTheme.secondary_color ?? color.secondaryColor}
            titleStyle={[{marginBottom: 5, fontSize: titleFontSize, fontFamily: FontFamily.regular, color: appTheme.primary_text_color ?? 'white'}, props.titleStyle]}
            pickerStyle={{backgroundColor: colorSet('background')}}
            pickerBoxStyle={{paddingRight: 4}}
            bottomSheetTitleStyle={{fontSize: bottomSheetTitleFontSize, fontFamily: FontFamily.bold}}
            placeholderStyle={[{fontSize: itemFontSize, fontFamily: FontFamily.regular, alignSelf: 'center', color: colorSet('text'), lineHeight: 30}, props.placeholderStyle]}
            itemTextStyle={[{fontSize: itemFontSize, fontFamily: FontFamily.regular, lineHeight: 30}, props.itemTextStyle]}
            itemFontFamily={FontFamily.regular}
            pickerContentHeight={props.pickerContentHeight || defaultPickerContentHeight}
            showLeftCheckIcon={true}
          />
}

export default CustomBottomSheetPickerComponent;