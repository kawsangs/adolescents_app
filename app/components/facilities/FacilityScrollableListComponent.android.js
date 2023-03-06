import React, {useRef} from 'react';

import FacilityCardItemComponent from './FacilityCardItemComponent';
import CustomFlatListComponent from '../shared/CustomFlatListComponent';
import facilityHelper from '../../helpers/facility_helper';
import facilitySyncService from '../../services/facility_sync_service';
import tagSyncService from '../../services/tag_sync_service';

const FacilityScrollableListComponent = (props) => {
  const listRef = useRef();
  const onEndReached = () => {
    facilitySyncService.syncData(facilityHelper.getStartingPage() + 1, (count) => {
      listRef.current?.stopPaginateLoading()
      props.reloadFacilityImages()
    }, () => listRef.current?.stopPaginateLoading())
  }

  const onRefresh = () => {
    tagSyncService.syncAllData()
    facilitySyncService.syncData(1, () => {
      listRef.current?.stopRefreshLoading()
      props.reloadFacilityImages()
    }, () => listRef.current?.stopRefreshLoading())
  }

  return <CustomFlatListComponent
            setFlatListRef={props.setFlatListRef}
            ref={listRef}
            data={props.facilities}
            renderItem={({item}) => <FacilityCardItemComponent facility={item} containerStyle={props.itemContainerStyle} accessibilityLabel={item.name} />}
            keyExtractor={item => item.uuid}
            hasInternet={props.hasInternet}
            horizontal={props.horizontal}
            endReachedAction={() => onEndReached()}
            refreshingAction={() => !props.horizontal && onRefresh()}
            customContentContainerStyle={props.customContentContainerStyle}
          />
}

export default FacilityScrollableListComponent;