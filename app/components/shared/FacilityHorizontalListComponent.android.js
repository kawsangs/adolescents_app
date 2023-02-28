import React, {useRef} from 'react';
import {Dimensions} from 'react-native';

import CustomFlatListComponent from '../shared/CustomFlatListComponent';
import FacilityCardItemComponent from '../facilities/FacilityCardItemComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {itemsPerPage} from '../../constants/sync_data_constant';
import facilityHelper from '../../helpers/facility_helper';
import facilitySyncService from '../../services/facility_sync_service';

let totalFacilities = 0
let page = facilityHelper.getStartingPage()

const FacilityHorizontalListComponent = (props) => {
  const listRef = useRef();
  const renderFacilityItem = (facility) => {
    return <FacilityCardItemComponent facility={facility}
              containerStyle={{width: Dimensions.get('screen').width - 32, marginTop: 0, marginRight: 8}}
              accessibilityLabel={facility.name}
            />
  }

  const onEndReached = () => {
    if (page > 1 && (page * itemsPerPage >= totalFacilities))
      return listRef.current?.stopPaginateLoading()

    page = totalFacilities < itemsPerPage ? 1 : page + 1
    facilitySyncService.syncData(page, (count) => {
      totalFacilities = count;
      listRef.current?.stopPaginateLoading()
    }, () => listRef.current?.stopPaginateLoading())
  }

  return <CustomFlatListComponent
            ref={listRef}
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