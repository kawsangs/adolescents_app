import React, {useState} from 'react';
import {ScrollView, StyleSheet, RefreshControl} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {backgroundColors} from '../../themes/color';
import {screenHorizontalPadding, gradientScrollViewBigPaddingBottom} from '../../constants/component_constant';
import color from '../../themes/color';

const {useImperativeHandle} = React

const GradientScrollViewComponent = React.forwardRef((props, ref) => {
  const [refreshing, setRefreshing] = useState(false);

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

  return (
    <LinearGradient
      colors={backgroundColors}
      start={{x: -0.7, y: 0.2}} end={{x: 1, y: 1}}
      style={{flexGrow: 1, width: '100%'}}
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
          refreshControl={!!props.allowPullRefresh && <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[color.primaryColor]} />}
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
    paddingBottom: gradientScrollViewBigPaddingBottom
  }
});

export default GradientScrollViewComponent;