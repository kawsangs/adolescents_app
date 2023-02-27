import React, {useState, useEffect} from 'react';
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
import {screenHorizontalPadding} from '../../constants/component_constant';
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

  const [facilities, setFacilities] = useState(Facility.getAll());
  const [selectedTagUuid, setSelectedTagUuid] = useState(null);
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
    console.log('=== on end reached === ', page)
    page += 1
    facilityListingService.syncFacility(page, (newFacilities) => {
      setFacilities(newFacilities)
    }, () => console.log('==== fetch facility error ===='))

    // startIndex = endIndex + 1;
    // endIndex = endIndex + 7
    // const newFacilities = [...facilities, ...facilityService.getFacilities(startIndex, endIndex, allFacilities)]
    // setFacilities(newFacilities)
  }

  const onRefresh = () => {
    facilityListingService.syncFacility(0, (newFacilities) => {
      setFacilities(newFacilities)
    }, () => console.log('==== fetch facility error ===='))
  }

  const renderList = () => {
    return <CustomFlatListComponent
              data={facilities}
              renderItem={({item}) => <FacilityCardItemComponent facility={item} containerStyle={{width: '100%'}} accessibilityLabel={item.name} />}
              keyExtractor={item => item.uuid}
              hasInternet={props.hasInternet}
              endReachedAction={() => onEndReached()}
              refreshingAction={() => onRefresh()}
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