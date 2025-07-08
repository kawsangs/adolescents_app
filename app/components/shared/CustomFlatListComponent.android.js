import React, {useState, useRef} from 'react';
import {View, FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import { useSelector } from 'react-redux';

import color from '../../themes/color';
import {screenHorizontalPadding, gradientScrollViewBigPaddingBottom} from '../../constants/component_constant';

const {useImperativeHandle} = React

const CustomFlatListComponent = React.forwardRef((props, ref) => {
  const [refreshing, setRefreshing] = useState(false);
  const [paginateLoading, setPaginateLoading] = useState(false);
  const onEndReachedCalledDuringMomentum = useRef(false)
  const appTheme = useSelector(state => state.appTheme.value);

  const stopPaginateLoading = () => {
    setPaginateLoading(false)
  }

  const stopRefreshLoading = () => {
    setRefreshing(false)
  }

  // To enable the parent component to call below functions from Ref
  useImperativeHandle(ref, () => ({
    stopPaginateLoading,
    stopRefreshLoading
  }))

  const onEndReached = () => {
    if (!props.hasInternet || onEndReachedCalledDuringMomentum.current || paginateLoading) return

    setPaginateLoading(true)
    onEndReachedCalledDuringMomentum.current = true
    !!props.endReachedAction && props.endReachedAction()
  }

  const onRefresh = () => {
    if (!props.hasInternet) return

    setRefreshing(true)
    !!props.refreshingAction && props.refreshingAction()
  }

  const renderListFooter = () => {
    if (!paginateLoading) return <View/>

    return !props.horizontal ? <ActivityIndicator size={props.isSmallLoading ? 'small' : 'large'} color={color.whiteColor} style={{marginTop: 10}} />
            : <View style={{height: '100%', justifyContent: 'center'}}>
                <ActivityIndicator size={props.isSmallLoading ? 'small' : 'large'} color={color.whiteColor} />
              </View>
  }

  return <View ref={ref}>
            <FlatList
              {...props}
              ref={ref => !!props.setFlatListRef && props.setFlatListRef(ref)}
              onEndReachedThreshold={0.3}
              onEndReached={() => onEndReached()}
              contentContainerStyle={!!props.customContentContainerStyle ? props.customContentContainerStyle : {paddingHorizontal: screenHorizontalPadding, paddingBottom: gradientScrollViewBigPaddingBottom}}
              ListFooterComponent={!props.hideFooterLoading && renderListFooter()}
              refreshControl={!props.horizontal && <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[appTheme.primary_color ?? color.primaryColor]} />}
              onMomentumScrollBegin = {() => {onEndReachedCalledDuringMomentum.current = false}}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
        </View>
})

export default CustomFlatListComponent