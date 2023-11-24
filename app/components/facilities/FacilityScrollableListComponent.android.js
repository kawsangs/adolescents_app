import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';

import FacilityCardItemComponent from './FacilityCardItemComponent';
import CustomFlatListComponent from '../shared/CustomFlatListComponent';
import facilityHelper from '../../helpers/facility_helper';
import facilitySyncService from '../../services/facility_sync_service';
import TagSyncService from '../../services/tag_sync_service';
import uuidv4 from '../../utils/uuidv4_util';
import Facility from '../../models/Facility';

const FacilityScrollableListComponent = (props) => {
  const listRef = useRef();
  const filteredProvince = useSelector(state => state.filterFacilityLocation.value);
  const [facilities, setFacilities] = React.useState(Facility.getAll())

  useEffect(() => {
    setFacilities(facilityHelper.getFacilities(filteredProvince, props.selectedTagUuid));
  }, [filteredProvince, props.selectedTagUuid]);

  const onEndReached = () => {
    if (!!filteredProvince.province)
      return listRef.current?.stopPaginateLoading()

    facilitySyncService.syncData(facilityHelper.getStartingPage() + 1, (count) => {
      listRef.current?.stopPaginateLoading()
      !!props.reloadFacilityImages && props.reloadFacilityImages()
    }, () => listRef.current?.stopPaginateLoading())
  }

  const onRefresh = () => {
    if (!!filteredProvince.province || !!props.selectedTagUuid)
      return listRef.current?.stopRefreshLoading()

    new TagSyncService('tag').syncAllData();
    facilitySyncService.syncAllData((newFacilities) => {
      setFacilities(newFacilities)
      listRef.current?.stopRefreshLoading()
      props.reloadFacilityImages()
    }, () => listRef.current?.stopRefreshLoading())
  }

  return <CustomFlatListComponent
            setFlatListRef={props.setFlatListRef}
            ref={listRef}
            data={facilities}
            renderItem={({item}) => <FacilityCardItemComponent facility={item} containerStyle={props.itemContainerStyle} accessibilityLabel={item.name} />}
            keyExtractor={item => uuidv4()}
            hasInternet={props.hasInternet}
            horizontal={props.horizontal}
            endReachedAction={() => onEndReached()}
            refreshingAction={() => !props.horizontal && onRefresh()}
            customContentContainerStyle={props.customContentContainerStyle}
          />
}

export default FacilityScrollableListComponent;