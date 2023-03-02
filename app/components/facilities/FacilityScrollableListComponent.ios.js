import React, {useRef} from 'react';

import FacilityCardItemComponent from './FacilityCardItemComponent';
import CustomFlatListComponent from '../shared/CustomFlatListComponent';
import {itemsPerPage} from '../../constants/sync_data_constant';
import facilityHelper from '../../helpers/facility_helper';
import facilitySyncService from '../../services/facility_sync_service';
import tagSyncService from '../../services/tag_sync_service';
import Facility from '../../models/Facility';

let totalFacilities = 0
let page = facilityHelper.getStartingPage()

const FacilityScollableListComponent = (props) => {
  totalFacilities = Facility.getAll().length
  const listRef = useRef();
  const onEndReached = () => {
    if (page > 1 && (page * itemsPerPage >= totalFacilities))
      return listRef.current?.stopPaginateLoading()

    page = totalFacilities < itemsPerPage ? 1 : page + 1
    facilitySyncService.syncData(page, (count) => {
      totalFacilities = count;
      listRef.current?.stopPaginateLoading()
    }, () => props.reloadFacilityImages(), () => listRef.current?.stopPaginateLoading())
  }

  const onRefresh = () => {
    tagSyncService.syncAllData()
    facilitySyncService.syncData(1, () => {
      listRef.current?.stopRefreshLoading()
      props.reloadFacilityImages()
    })
  }

  return <CustomFlatListComponent
            setFlatListRef={props.setFlatListRef}
            ref={listRef}
            data={props.facilities}
            renderItem={({item}) => <FacilityCardItemComponent facility={item} facilityImages={props.facilityImages} containerStyle={[{width: '100%'}, props.itemContainerStyle]} accessibilityLabel={item.name} />}
            keyExtractor={item => item.uuid}
            hasInternet={props.hasInternet}
            horizontal={props.horizontal}
            endReachedAction={() => onEndReached()}
            refreshingAction={() => !props.horizontal && onRefresh()}
            customContentContainerStyle={props.customContentContainerStyle}
          />
}

export default FacilityScollableListComponent;