import React, { useEffect } from 'react';
import {View, TouchableOpacity, ImageBackground} from 'react-native';
import { Card } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import GradientScrollViewComponent from '../shared/GradientScrollViewComponent';
import color, { backgroundColors } from '../../themes/color';
import fileUtil from '../../utils/file_util';
import categoryHelper from '../../helpers/category_helper';
import {setParentCategories} from '../../features/parentCategories/parentCategorySlice';
import { cardElevation } from '../../constants/component_constant';
import styles from '../../assets/stylesheets/mobile/themeSampleComponentStyles';

const ThemeSampleComponent = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.parentCategory.value)
  const appBorderRadius = props.appBorderRadius ?? 6

  useEffect(() => {
    dispatch(setParentCategories(categoryHelper.getHomeCategories()))
  }, []);

  const header = () => {
    return (
      <View style={[styles.headerContainer, { backgroundColor: props.theme != null ? props.theme.primary_color : color.primaryColor }]}>
        <View style={{width: '18%', height: 4, backgroundColor: props.theme.primary_text_color ?? 'white', opacity: 0.6, borderRadius: 8, marginRight: 6}} />
        <View style={{width: '60%', height: 4, backgroundColor: props.theme.primary_text_color ?? 'white', opacity: 0.6, borderRadius: 8}} />
      </View>
    )
  }

  const longCard = () => {
    return (
      <Card mode="elevated" elevation={cardElevation} style={[styles.longCardContainer, props.longCardContainerStyle]}>
        <View style={{flexDirection: 'row', height: '100%'}}>
          <View style={[{height: '100%', width: '30%', justifyContent: 'center'}, props.longCardImageContainerStyle]}>
            <ImageBackground source={categoryHelper.getFileByUrl(categories[0].image_url, 'image')} resizeMode='contain'
              style={{ width: '100%', height: '100%'}}
            />
          </View>
          <View style={[{flex: 1, flexDirection: 'column', paddingLeft: 6, paddingVertical: 6}, props.longCardTextContainer]}>
            <View style={[{backgroundColor: 'black', width: '98%'}, styles.longCardBlankText, props.longCardBlankTextStyle]} />
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <View style={[{backgroundColor: 'black', width: '30%'}, styles.longCardBlankText, props.longCardBlankTextStyle]} />
            </View>
          </View>
        </View>
      </Card>
    )
  }

  const gridCard = (item, index) => {
    return (
      <Card mode="elevated" elevation={cardElevation} style={[styles.gridCardContainer, props.gridCardContainerStyle]} key={index}>
        <ImageBackground
          source={!!item.image ? item.image : categoryHelper.getFileByUrl(item.image_url, 'image')}
          resizeMode='contain'
          style={[{ width: '90%', height: '90%', marginTop: 3, alignSelf: 'center', marginLeft: 4}, props.gridCardImageStyle]}
        />
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
      <View style={{flex: 1}}>
        { images != null &&
          <ImageBackground source={fileUtil.getSourceByUrl(images.xhdpi, 'image')}
            style={styles.themeImage}
            imageStyle={{borderBottomLeftRadius: appBorderRadius, borderBottomRightRadius: appBorderRadius}}
          />
        }
        <View style={{padding: props.mainPadding ?? 3}}>
          { categories.length > 0 && longCard() }
          { gridCards() }
        </View>
      </View>
    )
  }

  const getBackgroundColors = () => {
    if (props.theme == null)
      return backgroundColors;

    return [props.theme.secondary_color, props.theme.primary_color];
  }

  const gradientScrollView = () => {
    return <GradientScrollViewComponent
              backgroundColors={getBackgroundColors()}
              header={header()}
              body={body()}
              isNotScrollView={true}
              gradientContainerStyle={{height: '100%', width: '100%', borderRadius: appBorderRadius}}
              isForSample={true}
            />
  }

  return (
    <View style={[{flexDirection: 'row', marginBottom: 20}, props.containerStyle]}>
      {
        !props.onSelect
          ? <View style={[styles.appContainer, props.appContainerStyle]}>
              { gradientScrollView() }
            </View>
          : <TouchableOpacity
              onPress={() => props.onSelect()}
              style={[styles.appContainer, props.appContainerStyle]}
            >
              { gradientScrollView() }
            </TouchableOpacity>
      }
    </View>
  );
}

export default ThemeSampleComponent;