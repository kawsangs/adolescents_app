import React, {useState} from 'react';
import {ScrollView, StyleSheet, RefreshControl, ImageBackground, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

import {backgroundColors} from '../../themes/color';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {gradientScrollViewPaddingBottom} from '../../constants/ios_component_constant';
import color from '../../themes/color';
import fileUtil from '../../utils/file_util';
import themeUtil from '../../utils/theme_util';
import { getStyleOfDevice } from '../../utils/responsive_util';

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
    <LinearGradient
      colors={getBackgroundColors()}
      start={{x: -0.7, y: 0.2}} end={{x: 1, y: 1}}
      style={[{height: '100%', width: '100%'}, props.gradientContainerStyle]}
    >
      {props.header}

      { (!props.hideBackgroundImage && !!appTheme.android_images && !props.isForSample) &&
        <ImageBackground source={fileUtil.getSourceByUrl(themeUtil.getiOSBackgroundImage(appTheme), 'image')}
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
          refreshControl={!!props.allowPullRefresh && <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={appTheme.primary_text_color ?? color.whiteColor} />}
        >
          {props.body}
        </ScrollView>
      }
    </LinearGradient>
  )
});

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: screenHorizontalPadding,
    paddingBottom: gradientScrollViewPaddingBottom
  },
  themeImage: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    top: getStyleOfDevice(86, 112), // 112 is the sum of the status bar + app bar (56 * 2) [mobile], 86 is the sub of the status bar height & app bar height (iPad)
    left: 0,
    zIndex: 0
  }
});

export default GradientScrollViewComponent;