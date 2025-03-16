import React, { useState } from 'react';
import {  View, StyleSheet } from 'react-native';
import {  FlatList } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ThemeSampleComponent from './ThemeSampleComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import DashedLineComponent from '../shared/DashedLineComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import { appThemeContentHeight } from '../../constants/modal_constant';
import { screenHorizontalPadding } from '../../constants/component_constant';
import Theme from '../../models/Theme';
import color from '../../themes/color';
import {xLargeFontSize} from '../../utils/font_size_util';
import {isLowPixelDensityDevice} from '../../utils/responsive_util';

const ThemeBottomSheetComponent = () => {
  const [themes, setThemes] = useState(Theme.getAll());
  const [selectedTheme, setSelectedTheme] = useState();

  const listItem = (theme) => {
    return (
      <View style={{marginRight: 16}}>
        <ThemeSampleComponent
          theme={theme}
          isSelected={theme.id == selectedTheme}
          onSelect={() => setSelectedTheme(theme.id)}
        />
      </View>
    )
  }

  const themeList = () => {
    return (
      <FlatList
        data={themes}
        renderItem={({item}) => listItem(item)}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 12, width: '100%'}}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 16, flex: 1, flexDirection: 'column'}}>
        <View style={{height: isLowPixelDensityDevice() ? 48 : 56, paddingTop: 6, flexDirection: 'row', paddingHorizontal: screenHorizontalPadding}}>
          <BoldLabelComponent label="ម៉ូដរចនា" style={styles.modalTitle} />
        </View>
        <DashedLineComponent/>
        { themeList() }

        <View style={{paddingBottom: 14}}>
          <BigButtonComponent
            label='រក្សាទុក'
            uuid='save-button'
            style={{}}
            audio={null}
            buttonColor={color.primaryColor}
            textColor="white"
            iconPrimaryColor="white"
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.whiteColor,
    height: appThemeContentHeight,
  },
  modalTitle: {
    fontSize: xLargeFontSize()
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: screenHorizontalPadding,
  },
})

export default ThemeBottomSheetComponent;