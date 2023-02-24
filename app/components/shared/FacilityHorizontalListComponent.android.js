import React, {useState} from 'react';
import {Dimensions, FlatList, ActivityIndicator, View} from 'react-native';

import FacilityCardItemComponent from '../facilities/FacilityCardItemComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import color from '../../themes/color';

const FacilityHorizontalListComponent = (props) => {
  const [paginateLoading, setPaginateLoading] = useState(false);
  const renderFacilityItem = (facility) => {
    return <FacilityCardItemComponent facility={facility}
              containerStyle={{width: Dimensions.get('screen').width - 32, marginTop: 0, marginRight: 8}}
              accessibilityLabel={facility.name}
            />
  }

  const renderListFooter = () => {
    if (!paginateLoading) return <View/>

    return <View style={{height: '100%', justifyContent: 'center'}}>
              <ActivityIndicator size="large" color={color.whiteColor} />
           </View>
  }

  const onEndReached = () => {
    if (!props.hasInternet) return

    setPaginateLoading(true)
    setTimeout(() => setPaginateLoading(false), 3000)
  }

  return <FlatList
            ref={ref => props.setScrollViewRef(ref)}
            data={props.facilities}
            renderItem={({item}) => renderFacilityItem(item)}
            keyExtractor={item => item.uuid}
            horizontal={true}
            contentContainerStyle={{paddingBottom: 4, paddingLeft: screenHorizontalPadding, paddingRight: 8}}
            onEndReachedThreshold={0.3}
            onEndReached={() => onEndReached()}
            ListFooterComponent={renderListFooter()}
          />
}

export default FacilityHorizontalListComponent;