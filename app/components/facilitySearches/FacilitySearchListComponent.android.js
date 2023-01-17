import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {largeFontSize} from '../../utils/font_size_util';
import {getStyleOfDevice} from '../../utils/responsive_util';
import facilitySearchService from '../../services/facility_search_service';
import visitService from '../../services/visit_service';
import {navigationRef} from '../../navigators/app_navigator';
import SearchHistory from '../../models/SearchHistory';

import tabletStyles from '../../assets/stylesheets/tablet/facilitySearchListComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/facilitySearchListComponentStyles';
const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const FacilitySearchListComponent = (props) => {
  const {t} = useTranslation();
  const [searchHistories, setSearchHistories] = useState([]);
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    setSearchHistories(props.searchText == '' ? SearchHistory.getAll() : []);
    setFacilities(props.searchText != '' ? facilitySearchService.findFacilityByNameOrService(props.searchText) : []);

  }, [props.searchText]);

  const viewDetail = (facility) => {
    SearchHistory.upsert(facility.name)
    visitService.recordVisitFacility(facility, () => {
      navigationRef.current?.navigate('FacilityDetailView', {uuid: facility.uuid})
      setTimeout(() => {
        props.updateSearchText("");
      }, 100);
    });
  }

  const renderServices = (services) => {
    let label = ""
    services.map((service, index) => {
      label += `${service}${index < services.length - 1 ? ', ' : ''}`
    });
    return <Text style={styles.serviceLabel} numberOfLines={1}>{label}</Text>
  }

  const listItem = (key, label, services, onPress) => {
    return <TouchableOpacity key={key} style={[styles.item, services.length == 0 ? {minHeight: componentUtil.mediumPressableItemSize(), paddingTop: 2} : {}]} onPress={() => onPress()} activeOpacity={0.5}>
              <Text style={styles.clinicName} numberOfLines={2}>{label}</Text>
              {services.length > 0 && renderServices(services)}
           </TouchableOpacity>
  }

  const renderNoResultMessage = () => {
    return <View style={{backgroundColor: color.whiteColor, height: componentUtil.mediumPressableItemSize(), justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: largeFontSize(), color: '#a5a5a5'}}>{t('noResult')}</Text>
           </View>
  }

  const renderListItems = () => {
    if (facilities.length == 0)
      return renderNoResultMessage()

    return facilities.map((facility, index) => {
      return listItem(index, facility.name, facility.services, () => viewDetail(facility))
    });
  }

  const renderSearchHistories = () => {
    return searchHistories.map((searchHistory, index) => {
      return listItem(`history-${index}`, searchHistory.name, [], () => props.updateSearchText(searchHistory.name))
    });
  }

  if (props.searchText == '' && searchHistories.length == 0)
    return <View/>

  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <Text style={{color: '#fa60ad', fontSize: largeFontSize(), marginLeft: 12}}>{props.searchText != '' ? t('searchResult') : t('previousSearch')}</Text>
      </View>
      { props.searchText != '' ? renderListItems() : renderSearchHistories() }
      <View style={styles.listFooter} />
    </View>
  )
}

export default FacilitySearchListComponent;