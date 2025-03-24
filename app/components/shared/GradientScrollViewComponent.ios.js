import React, {useState} from 'react';
import {ScrollView, StyleSheet, RefreshControl, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

import {backgroundColors} from '../../themes/color';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {gradientScrollViewPaddingBottom} from '../../constants/ios_component_constant';
import color from '../../themes/color';

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
  }
});

export default GradientScrollViewComponent;