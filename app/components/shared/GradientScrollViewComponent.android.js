import React, {useState} from 'react';
import {ScrollView, StyleSheet, RefreshControl, ImageBackground, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import {backgroundColors} from '../../themes/color';
import {screenHorizontalPadding, gradientScrollViewBigPaddingBottom} from '../../constants/component_constant';
import color from '../../themes/color';
import fileUtil from '../../utils/file_util';
import themeUtil from '../../utils/theme_util';

const {useImperativeHandle} = React

const GradientScrollViewComponent = React.forwardRef((props, ref) => {
  const [refreshing, setRefreshing] = useState(false);
  const appTheme = useSelector(state => state.appTheme.value);

  const stopRefreshLoading = () => {
    setRefreshing(false)
  }

  useImperativeHandle(ref, () => ({
    stopRefreshLoading
  }))

  const onRefresh = () => {
    if (!props.hasInternet) return

    setRefreshing(true)
    !!props.refreshingAction && props.refreshingAction()
  }

  const getBackgroundColors = () => {
    if (props.backgroundColors)
      return props.backgroundColors;

    return !!appTheme
      ? [appTheme.secondary_color, appTheme.primary_color]
      : backgroundColors;
  }

  return (
    <SafeAreaView style={{flexGrow: 1, backgroundColor: "#000000"}}>
      <LinearGradient
        colors={getBackgroundColors()}
        start={{x: -0.7, y: 0.2}} end={{x: 1, y: 1}}
        style={[{height: '100%', width: '100%'}, props.gradientContainerStyle]}
      >
        {props.header}

        { (!props.hideBackgroundImage && !!appTheme.android_images && !props.isForSample) &&
          <ImageBackground source={fileUtil.getSourceByUrl(themeUtil.getAndroidBackgroundImage(appTheme), 'image')}
            style={styles.themeImage}
          />
        }

        { props.isNotScrollView ? 
            props.body
          :
          <ScrollView contentContainerStyle={[styles.scrollView, props.scrollViewStyle]}
            nestedScrollEnabled={true}
            scrollEnabled={props.scrollable ?? true}
            scrollEventThrottle={16}
            onScroll={(event) => !!props.onScroll && props.onScroll(event)}
            refreshControl={!!props.allowPullRefresh && <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[appTheme.primary_color ?? color.primaryColor]} />}
          >
            {props.body}
          </ScrollView>
        }
      </LinearGradient>
    </SafeAreaView>
  )
});

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: screenHorizontalPadding,
    paddingBottom: gradientScrollViewBigPaddingBottom,
  },
  themeImage: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0
  }
});

export default GradientScrollViewComponent;