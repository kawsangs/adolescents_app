import React, {useState, useEffect, useRef} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

import FacilityTagScrollBarComponent from './FacilityTagScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import CustomFlatListComponent from '../shared/CustomFlatListComponent';
import color from '../../themes/color';
import Facility from '../../models/Facility';
import Tag from '../../models/Tag';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {itemsPerPage} from '../../constants/sync_data_constant';
import facilityHelper from '../../helpers/facility_helper';
import {xxLargeFontSize} from '../../utils/font_size_util';
import {getStyleOfDevice} from '../../utils/responsive_util';
import facilitySyncService from '../../services/facility_sync_service';
import tagSyncService from '../../services/tag_sync_service';

let totalFacilities = 0
let page = facilityHelper.getStartingPage()

const FacilityListViewComponent = (props) => {
  const {t} = useTranslation();
  totalFacilities = Facility.getAll().length
  const [facilities, setFacilities] = useState(Facility.getAll())
  const [tags, setTags] = useState(Tag.getAll());
  const [selectedTagUuid, setSelectedTagUuid] = useState(null);
  const filteredProvince = useSelector(state => state.filterFacilityLocation.value);
  const listRef = useRef();

  useEffect(() => {
    updateFacilityList(selectedTagUuid);
  }, [filteredProvince]);

  const updateFacilityList = (tagUuid) => {
    setFacilities(facilityHelper.getFacilities(filteredProvince, tagUuid));
    if (selectedTagUuid != tagUuid) setSelectedTagUuid(tagUuid);
  }

  const renderEmptyMessage = () => {
    return <View style={{flexGrow: 1, marginRight: screenHorizontalPadding, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="file-text" size={getStyleOfDevice(110, 90)} color={color.whiteSmokeColor} style={{marginTop: getStyleOfDevice(80, 0)}} />
              <Text style={{fontSize: xxLargeFontSize(), color: color.whiteColor, marginTop: 10}}>{t('noResult')}</Text>
           </View>
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

  const onRefresh = () => {
    facilitySyncService.syncData(1)
    tagSyncService.syncAllData((newTags) => setTags(newTags))
    listRef.current?.stopRefreshLoading()
  }

  const renderList = () => {
    return <CustomFlatListComponent
              ref={listRef}
              data={facilities}
              renderItem={({item, index}) => <FacilityCardItemComponent facility={item} containerStyle={{width: '100%'}} accessibilityLabel={item.name} />}
              keyExtractor={item => item.uuid}
              hasInternet={props.hasInternet}
              endReachedAction={() => onEndReached()}
              refreshingAction={() => onRefresh()}
           />
  }

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <FacilityTagScrollBarComponent tags={tags} updateFacilityList={updateFacilityList} hasInternet={props.hasInternet} containerStyle={{paddingRight: screenHorizontalPadding}}/>
      {facilities.length > 0 ? renderList() : renderEmptyMessage()}
    </View>
  )
}

export default FacilityListViewComponent;