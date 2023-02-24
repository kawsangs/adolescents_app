import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

import FacilityTagScrollBarComponent from './FacilityTagScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import color from '../../themes/color';
import Facility from '../../models/Facility';
import {screenHorizontalPadding, gradientScrollViewPaddingBottom} from '../../constants/component_constant';
import facilityHelper from '../../helpers/facility_helper';
import {xxLargeFontSize} from '../../utils/font_size_util';
import {getStyleOfDevice} from '../../utils/responsive_util';
import facilityListingService from '../../services/facility_listing_service';

// let startIndex = 0;
// let endIndex = 10;

const FacilityListViewComponent = (props) => {
  const {t} = useTranslation();
  // const allFacilities = Facility.getAll()
  // const [facilities, setFacilities] = useState(facilityListingService.getFacilities(startIndex, endIndex, allFacilities))
  // const [facilities, setFacilities] = useState([])

  const [facilities, setFacilities] = useState(Facility.getAll());
  const [selectedTagUuid, setSelectedTagUuid] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [paginateLoading, setPaginateLoading] = useState(false);
  const filteredProvince = useSelector(state => state.filterFacilityLocation.value);
  let page = 0

  // useEffect(() => {
  //   console.log('==== Facility did mount ===')
  //   startIndex = 0
  //   endIndex = 10
  //   setFacilities(facilityService.getFacilities(startIndex, endIndex, allFacilities))
  // }, [])

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
    if (!props.hasInternet) return

    console.log('=== on end reached === ', page)
    page += 1
    // setRefreshing(true)
    // facilityListingService.syncFacility(page, (newFacilities) => {
    //   setFacilities(newFacilities)
    //   // setRefreshing(false)
    // }, () => setRefreshing(false))

    setPaginateLoading(true)
    setTimeout(() => setPaginateLoading(false), 3000)

    // if (facilities.length >= allFacilities.length) return

    // startIndex = endIndex + 1;
    // endIndex = endIndex + 7
    // const newFacilities = [...facilities, ...facilityService.getFacilities(startIndex, endIndex, allFacilities)]
    // setFacilities(newFacilities)
  }

  const onRefresh = () => {
    if (!props.hasInternet) return

    console.log('== refresh with internet ==')
    setRefreshing(true)
    // facilityListingService.syncFacility(0, (newFacilities) => {
    //   setFacilities(newFacilities)
    //   setRefreshing(false)
    // }, () => setRefreshing(false))
    setTimeout(() => setRefreshing(false), 3000)
  }

  const renderListFooter = () => {
    return !paginateLoading ? <View/> : <ActivityIndicator size="large" color={color.whiteColor} style={{marginTop: 10}} />
  }

  const renderList = () => {
    return <FlatList
              data={facilities}
              renderItem={({item}) => <FacilityCardItemComponent facility={item} containerStyle={{width: '100%'}} accessibilityLabel={item.name} />}
              keyExtractor={item => item.uuid}
              contentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingBottom: gradientScrollViewPaddingBottom + 10}}
              onEndReachedThreshold={0.3}
              onEndReached={() => onEndReached()}
              ListFooterComponent={renderListFooter()}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[color.primaryColor]} />}
           />
  }

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{paddingLeft: screenHorizontalPadding}}>
        <FacilityTagScrollBarComponent updateFacilityList={updateFacilityList} containerStyle={{paddingRight: screenHorizontalPadding}}/>
      </View>
      {facilities.length > 0 ? renderList() : renderEmptyMessage()}
    </View>
  )
}

export default FacilityListViewComponent;