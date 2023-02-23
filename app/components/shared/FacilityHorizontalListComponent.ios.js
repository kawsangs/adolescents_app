import React from 'react';
import {Dimensions, FlatList} from 'react-native';

import FacilityCardItemComponent from '../facilities/FacilityCardItemComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityHorizontalListComponent = (props) => {
  const renderFacilityItem = (facility) => {
    return <FacilityCardItemComponent facility={facility}
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={{width: Dimensions.get('screen').width - 32, marginTop: 0, marginRight: 8}}
              accessibilityLabel={facility.name}
            />
  }

  return <FlatList
            ref={ref => props.setScrollViewRef(ref)}
            data={props.facilities}
            renderItem={({item}) => renderFacilityItem(item)}
            keyExtractor={item => item.uuid}
            horizontal={true}
            contentContainerStyle={{paddingBottom: 4, paddingLeft: screenHorizontalPadding, paddingRight: 8, paddingBottom: getStyleOfDevice(20, 0)}}
            onEndReachedThreshold={0.3}
            onEndReached={() => console.log('=== on end reach ===')}
          />
}

export default FacilityHorizontalListComponent;