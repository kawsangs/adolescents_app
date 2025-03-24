import React from 'react';
import {View, Image, TouchableOpacity, Linking} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux';

import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import fileUtil from '../../utils/file_util';

const SurveyNoteComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  const onPress = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported)
        Linking.openURL(url);
      else
        alert(`មិនអាចបើកតំណនេះ`);
    });
  }

  const renderItems = () => {
    return props.options.map(option => {
      const image = fileUtil.getSourceByUrl(option.image_url, 'image');
      return (
        <TouchableOpacity key={option.id}
          onPress={() => onPress(option.value)}
          style={{borderBottomWidth: 1, borderBottomColor: color.lightGrayColor, flexDirection: 'row', minHeight: 64, alignItems: 'center'}}
        >
          { image &&
            <Image source={image} resizeMode='contain'
              style={{width: 34, height: 34}}
            />
          }

          <View style={{flex: 1, paddingLeft: 12}}>
            <Text numberOfLines={2} style={{color: appTheme.primary_color ?? color.primaryColor, fontSize: largeFontSize()}}>
              {option.name}
            </Text>
          </View>
          <Icon name="chevron-right" color={appTheme.primary_color ?? color.primaryColor} size={24} />
        </TouchableOpacity>
      )
    })
  }

  return (
    <View>
      {renderItems()}
    </View>
  )
}

export default SurveyNoteComponent;