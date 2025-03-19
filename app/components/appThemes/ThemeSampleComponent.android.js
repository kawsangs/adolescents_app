import React, { useEffect } from 'react';
import {Image, View, TouchableOpacity, ImageBackground} from 'react-native';
import { Card, Text } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';

import GradientScrollViewComponent from '../shared/GradientScrollViewComponent';
import color, { backgroundColors } from '../../themes/color';
import fileUtil from '../../utils/file_util';
import categoryHelper from '../../helpers/category_helper';
import {setParentCategories} from '../../features/parentCategories/parentCategorySlice';
import { cardElevation } from '../../constants/component_constant';
import styles from '../../assets/stylesheets/mobile/themeSampleComponentStyles';

const ThemeSampleComponent = (props) => {
  const categories = useSelector(state => state.parentCategory.value)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setParentCategories(categoryHelper.getHomeCategories()))

  }, []);

  const header = () => {
    return (
      <View style={[styles.headerContainer, { backgroundColor: props.theme != null ? props.theme.primary_color : color.primaryColor }]}>
        <IonIcon name="menu" size={12} color='white' />
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.headerLabel}>សុខភាពយុវជន</Text>
      </View>
    )
  }

  const longCard = () => {
    return (
      <Card mode="elevated" elevation={cardElevation} style={styles.cardContainer}>
        <View style={{flexDirection: 'row', height: '100%'}}>
          <View style={{height: '100%', justifyContent: 'center'}}>
            <ImageBackground source={categoryHelper.getFileByUrl(categories[0].image_url, 'image')} resizeMode='cover'
              style={{ width: 35, height: 20}}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'column', paddingLeft: 6, paddingVertical: 3}}>
            <Text style={{fontSize: 4}}>{categories[0].name}</Text>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text style={{fontSize: 4}}>6 ចំនុច</Text>
            </View>
          </View>
        </View>
      </Card>
    )
  }

  const gridCard = (item, index) => {
    return (
      <Card mode="elevated" elevation={cardElevation} style={styles.gridCardContainer} key={index}>
        <ImageBackground
          source={!!item.image ? item.image : categoryHelper.getFileByUrl(item.image_url, 'image')}
          resizeMode='cover'
          style={{ width: 35, height: 25, alignSelf: 'center', marginTop: 3}}
        />
        <Text style={{fontSize: 4, marginTop: 2}}>{ item.name }</Text>
        <Text style={{fontSize: 4, marginTop: 2}}>5 ចំនុច</Text>
      </Card>
    )
  }

  const gridCards = () => {
    const gridCategories = categories.slice(1);
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        { gridCategories.map((item, index) => { return gridCard(item, index) }) }
      </View>
    )
  }

  const body = () => {
    let images;
    if (!!props.theme.android_images)
      images = JSON.parse(props.theme.android_images);

    return (
      <View style={{height: '100%', padding: 6}}>
        { images != null &&
          <ImageBackground source={fileUtil.getSourceByUrl(images.xhdpi, 'image')}
            style={styles.themeImage}
            imageStyle={{borderBottomLeftRadius: 6, borderBottomRightRadius: 6}}
          />
        }
        { longCard() }
        { gridCards() }
      </View>
    )
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
          isForSample={true}
        />
        <Text numberOfLines={1} style={{textAlign: 'center', marginTop: 8}}>{ props.theme.name }</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ThemeSampleComponent;