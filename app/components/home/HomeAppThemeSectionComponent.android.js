import React, { useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import ChangeThemeInfoModalComponent from '../appThemes/ChangeThemeInfoModalComponent';
import Theme from '../../models/Theme';
import { setSelectedAppTheme } from '../../features/appThemes/appThemeSlice';

import AppThemeSampleComponent from './AppThemeSampleComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';

const HomeAppThemeSectionComponent = () => {
  const themes = useSelector(state => state.appTheme.items);
  const [selectedTheme, setSelectedTheme] = useState(Theme.getDefault());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const appTheme = useSelector(state => state.appTheme.value);
  const dispatch = useDispatch();

  const listItem = (theme) => {
    return (
      <View style={{marginRight: 16}}>
        <AppThemeSampleComponent theme={theme}
          onSelect={() => {
            setSelectedTheme(theme);
            setIsModalVisible(true);
          }}
        />
      </View>
    )
  }

  if (themes.length == 0)
    return <View/>

  return (
    <View>
      <View style={{borderWidth: 0.2, marginTop: 26, marginBottom: 14, opacity: 0.4, borderColor: appTheme.primary_text_color ?? 'white'}}/>
      <BoldLabelComponent label="ជម្រើសផ្ទៃអេក្រង់" style={{fontSize: 16, color: appTheme.primary_text_color ?? "white"}}/>

      <FlatList
        data={themes}
        renderItem={({item}) => listItem(item)}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 12, width: '100%'}}
      />

      <ChangeThemeInfoModalComponent
        visible={isModalVisible}
        theme={selectedTheme}
        onDismiss={() => setIsModalVisible(false)}
        applyTheme={() => {
          Theme.updateDefault(selectedTheme.uuid);
          dispatch(setSelectedAppTheme({
            id: selectedTheme.id,
            primary_color: selectedTheme.primary_color,
            secondary_color: selectedTheme.secondary_color,
            primary_text_color: selectedTheme.primary_text_color,
            secondary_text_color: selectedTheme.secondary_text_color,
            android_images: selectedTheme.android_images,
            ios_images: selectedTheme.ios_images
          }));
          setIsModalVisible(false);
        }}
      />
    </View>
  )
}

export default HomeAppThemeSectionComponent;