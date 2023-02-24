import React from 'react';
import {Dimensions} from 'react-native';

import CustomFlatListComponent from '../shared/CustomFlatListComponent';
import FacilityCardItemComponent from '../facilities/FacilityCardItemComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityHorizontalListComponent = (props) => {
  const renderFacilityItem = (facility) => {
    return <FacilityCardItemComponent facility={facility}
              containerStyle={{width: Dimensions.get('screen').width - 32, marginTop: 0, marginRight: 8}}
              accessibilityLabel={facility.name}
            />
  }

  const onEndReached = () => {
    console.log('=== on end reached ===')
  }

  return <CustomFlatListComponent
            ref={ref => props.setScrollViewRef(ref)}
            data={props.facilities}
            renderItem={({item}) => renderFacilityItem(item)}
            keyExtractor={item => item.uuid}
            horizontal={true}
            hasInternet={props.hasInternet}
            customContentContainerStyle={{paddingBottom: 4, paddingLeft: screenHorizontalPadding, paddingRight: 8, paddingBottom: getStyleOfDevice(20, 0)}}
            endReachedAction={() => onEndReached()}
          />
}

export default FacilityHorizontalListComponent;