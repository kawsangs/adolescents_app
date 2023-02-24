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

const FacilityListViewComponent = (props) => {
  const {t} = useTranslation();
  const [facilities, setFacilities] = useState(Facility.getAll());
  const [selectedTagUuid, setSelectedTagUuid] = useState(null);
  const filteredLocation = useSelector(state => state.filterFacilityLocation.value);

  useEffect(() => {
    updateFacilityList(selectedTagUuid);
  }, [filteredLocation]);

  const updateFacilityList = (tagUuid) => {
    setFacilities(facilityHelper.getFacilities(filteredLocation, tagUuid));
    if (selectedTagUuid != tagUuid) setSelectedTagUuid(tagUuid);
  }

  const renderEmptyMessage = () => {
    return <View style={{flexGrow: 1, marginRight: screenHorizontalPadding, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="file-text" size={getStyleOfDevice(110, 90)} color={color.whiteSmokeColor} />
              <Text style={{fontSize: xxLargeFontSize(), color: color.whiteColor, marginTop: 10}}>{t('noResult')}</Text>
           </View>
  }

  const onEndReached = () => {
    console.on('======== on end reached =====')
    // Todo: sync the facility data from n page
  }

  const onRefresh = () => {
    console.log('======== on refresh ====')
    // Todo: sync the facility data (page 1)
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