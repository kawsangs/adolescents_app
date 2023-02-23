import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

import FacilityTagScrollBarComponent from './FacilityTagScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import color from '../../themes/color';
import Facility from '../../models/Facility';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {scrollViewPaddingBottom} from '../../constants/ios_component_constant';
import facilityHelper from '../../helpers/facility_helper';
import {xxLargeFontSize} from '../../utils/font_size_util';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityListViewComponent = () => {
  const {t} = useTranslation();
  const [playingUuid, setPlayingUuid] = useState(null);
  const [facilities, setFacilities] = useState(Facility.getAll());
  const [selectedTagUuid, setSelectedTagUuid] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
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

  const renderFacilityItem = (facility) => {
    return <FacilityCardItemComponent key={facility.id} facility={facility}
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              containerStyle={{width: '100%'}}
              accessibilityLabel={facility.name}
            />
  }

  const renderList = () => {
    return <FlatList
              data={facilities}
              renderItem={({item}) => renderFacilityItem(item)}
              contentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingBottom: scrollViewPaddingBottom}}
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true)
                setTimeout(() => setRefreshing(false), 3000)
              }}
              onEndReachedThreshold={0.3}
              onEndReached={() => console.log('=== on end reach ===')}
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