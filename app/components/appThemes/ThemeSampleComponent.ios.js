import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

import GradientScrollViewComponent from '../shared/GradientScrollViewComponent';
import color, { backgroundColors } from '../../themes/color';
import fileUtil from '../../utils/file_util';

const ThemeSampleComponent = (props) => {
  const header = () => {
    return (
      <View style={[styles.headerContainer, { backgroundColor: props.theme != null ? props.theme.primary_color : color.primaryColor }]}>
        <IonIcon name="menu" size={12} color='white' />
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.headerLabel}>សុខភាពយុវជន</Text>
      </View>
    )
  }

  const body = () => {
    let images;
    if (!!props.theme.android_images)
      images = JSON.parse(props.theme.ios_images);

    return images != null
      ? <Image source={fileUtil.getSourceByUrl(images['3x'], 'image')} style={styles.themeImage} />
      : <View/>
  }

  const getBackgroundColors = () => {
    if (props.theme == null)
      return backgroundColors;

    return [props.theme.secondary_color, props.theme.primary_color];
  }

  return (
    <View style={{flexDirection: 'row', marginBottom: 20}}>
      <TouchableOpacity
        onPress={() => props.onSelect()}
        style={[styles.container, props.isSelected && styles.selectedContainer]}
      >
        <GradientScrollViewComponent
          backgroundColors={getBackgroundColors()}
          header={header()}
          body={body()}
          isNotScrollView={true}
          gradientContainerStyle={{borderRadius: 6, height: 250, width: 140}}
        />
        <Text numberOfLines={1} style={{textAlign: 'center', marginTop: 8}}>{ props.theme.name }</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'white',
    height: 300,
    width: 160,
    padding: 6,
  },
  selectedContainer: {
    borderWidth: 3,
    borderColor: color.secondaryColor,
    borderRadius: 10,
  },
  headerContainer: {
    alignItems: 'center',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    width: '100%',
    height: 20,
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  headerLabel: {
    color: 'white',
    fontSize: 8,
    lineHeight: 12,
    marginTop: -2
  },
  logo: {
    width: 10,
    height: 10,
    marginHorizontal: 6,
  },
  themeImage: {
    width: 140,
    height: 230,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  }
});

export default ThemeSampleComponent;