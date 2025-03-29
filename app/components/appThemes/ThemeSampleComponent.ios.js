import React, { useEffect } from 'react';
import {View, ImageBackground} from 'react-native';
import { Card } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import GradientScrollViewComponent from '../shared/GradientScrollViewComponent';
import color, { backgroundColors } from '../../themes/color';
import fileUtil from '../../utils/file_util';
import {getStyleOfDevice} from '../../utils/responsive_util';
import categoryHelper from '../../helpers/category_helper';
import {setParentCategories} from '../../features/parentCategories/parentCategorySlice';
import { cardElevation } from '../../constants/component_constant';
import mobileStyles from '../../assets/stylesheets/mobile/themeSampleComponentStyles';
import tabletStyles from '../../assets/stylesheets/tablet/themeSampleComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const ThemeSampleComponent = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.parentCategory.value)
  const appBorderRadius = 20;

  useEffect(() => {
    dispatch(setParentCategories(categoryHelper.getHomeCategories()))
  }, []);

  const header = () => {
    const blankTextHeight = getStyleOfDevice(10, 4)
    return (
      <View style={[styles.headerContainer, { backgroundColor: props.theme != null ? props.theme.primary_color : color.primaryColor }]}>
        <View style={{width: '18%', height: blankTextHeight, backgroundColor: props.theme.primary_text_color ?? 'white', opacity: 0.6, borderRadius: 8, marginRight: 6}} />
        <View style={{width: '60%', height: blankTextHeight, backgroundColor: props.theme.primary_text_color ?? 'white', opacity: 0.6, borderRadius: 8}} />
      </View>
    )
  }

  const longCard = () => {
    return (
      <Card mode="elevated" elevation={cardElevation} style={styles.longCardContainer}>
        <View style={{flexDirection: 'row', height: '100%'}}>
          <View style={styles.longCardImageContainer}>
            <ImageBackground source={categoryHelper.getFileByUrl(categories[0].image_url, 'image')} resizeMode='contain'
              style={{ width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.longCardTextContainer}>
            <View style={[{width: '98%'}, styles.longCardBlankText]} />
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <View style={[{width: '30%'}, styles.longCardBlankText]} />
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
          resizeMode='contain'
          style={styles.gridCardImage}
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
      images = JSON.parse(props.theme.ios_images);

    return (
      <View style={{flex: 1}}>
        { images != null &&
          <ImageBackground source={fileUtil.getSourceByUrl(images['1x'], 'image')}
            style={styles.themeImage}
            imageStyle={{borderBottomLeftRadius: appBorderRadius, borderBottomRightRadius: appBorderRadius}}
          />
        }
        <View style={{padding: getStyleOfDevice(12, 8)}}>
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
              gradientContainerStyle={{height: '100%', width: '100%', borderBottomLeftRadius: appBorderRadius, borderBottomRightRadius: appBorderRadius}}
              isForSample={true}
            />
  }

  return (
    <View style={styles.container}>
      <View style={styles.appThemeContainer}>
        { gradientScrollView() }
      </View>
    </View>
  );
}

export default ThemeSampleComponent;