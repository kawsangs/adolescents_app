import React, {useState, useRef} from 'react';
import {View, FlatList, RefreshControl, ActivityIndicator} from 'react-native';

import color from '../../themes/color';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {scrollViewPaddingBottom} from '../../constants/ios_component_constant';

const CustomFlatListComponent = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [paginateLoading, setPaginateLoading] = useState(false);
  const onEndReachedCalledDuringMomentum = useRef(false)

  const onEndReached = () => {
    if (!props.hasInternet || onEndReachedCalledDuringMomentum.current) return

    setPaginateLoading(true)
    setTimeout(() => setPaginateLoading(false), 3000)
    onEndReachedCalledDuringMomentum.current = true
    !!props.endReachedAction && props.endReachedAction()
  }

  const onRefresh = () => {
    if (!props.hasInternet) return

    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 3000)
    !!props.refreshingAction && props.refreshingAction()
  }

  const renderListFooter = () => {
    if (!paginateLoading) return <View/>

    return !props.horizontal ? <ActivityIndicator size="large" color={color.whiteColor} style={{marginTop: 10}} />
            : <View style={{height: '100%', justifyContent: 'center'}}>
                <ActivityIndicator size="large" color={color.whiteColor} />
              </View>
  }

  return <FlatList
            {...props}
            onEndReachedThreshold={0.3}
            onEndReached={() => onEndReached()}
            contentContainerStyle={!!props.customContentContainerStyle ? props.customContentContainerStyle : {paddingHorizontal: screenHorizontalPadding, paddingBottom: scrollViewPaddingBottom}}
            ListFooterComponent={renderListFooter()}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={color.whiteColor} />}
            onMomentumScrollBegin = {() => {onEndReachedCalledDuringMomentum.current = false}}

          />
}

export default CustomFlatListComponent