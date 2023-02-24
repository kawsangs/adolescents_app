import React, {useState} from 'react';
import {Dimensions, FlatList, ActivityIndicator, View} from 'react-native';

import CustomFlatListComponent from '../shared/CustomFlatListComponent';
import FacilityCardItemComponent from '../facilities/FacilityCardItemComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';

const FacilityHorizontalListComponent = (props) => {
  const renderFacilityItem = (facility) => {
    return <FacilityCardItemComponent facility={facility}
              containerStyle={{width: Dimensions.get('screen').width - 32, marginTop: 0, marginRight: 8}}
              accessibilityLabel={facility.name}
            />
  }

  const onEndReached = () => {
    console.log('== on reach end ===')
  }

  return <CustomFlatListComponent
            setFlatListRef={props.setFlatListRef}
            data={props.facilities}
            renderItem={({item}) => renderFacilityItem(item)}
            keyExtractor={item => item.uuid}
            horizontal={true}
            hasInternet={props.hasInternet}
            customContentContainerStyle={{paddingBottom: 4, paddingLeft: screenHorizontalPadding, paddingRight: 8}}
            endReachedAction={() => onEndReached()}
          />
}

export default FacilityHorizontalListComponent;