import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import {screenHorizontalPadding, cardBorderRadius} from '../../constants/component_constant';
import componentUtil from '../../utils/component_util';
import {largeFontSize} from '../../utils/font_size_util';
import facilitySearchService from '../../services/facility_search_service';
import visitService from '../../services/visit_service';
import {navigationRef} from '../../navigators/app_navigator';
import SearchHistory from '../../models/SearchHistory';

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
        props.updateIsSearching(false);
        props.updateSearchText("");
      }, 100);
    });
  }

  const renderListItems = () => {
    if (props.searchText != '')
      return facilities.map((facility, index) => {
        return (
          <TouchableOpacity key={index} style={styles.item} onPress={() => viewDetail(facility)}>
            <Text style={{fontSize: largeFontSize(), flex: 1}}>{facility.name}</Text>
          </TouchableOpacity>
        )
      });

    return renderSearchHistories();
  }

  const renderSearchHistories = () => {
    return searchHistories.map((searchHistory, index) => {
      return (
        <TouchableOpacity key={`history-${index}`} style={styles.item} onPress={() => props.updateSearchText(searchHistory.name)}>
          <Text>{searchHistory.name}</Text>
        </TouchableOpacity>
      )
    });
  }

  if (facilities.length == 0 && searchHistories.length == 0)
    return <View/>

  const renderResult = () => {
    return (
      <React.Fragment>
        <View style={{height: 40, justifyContent: 'center'}}>
          <Text style={{color: '#fa60ad', fontSize: largeFontSize(), marginLeft: 12}}>{props.searchText != '' ? t('searchResult') : t('previousSearch')}</Text>
        </View>
        { renderListItems() }
      </React.Fragment>
    )
  }

  return (
    <View style={styles.container}>
      { renderResult() }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: cardBorderRadius,
    backgroundColor: '#f4f1f9',
    elevation: 2,
    marginRight: screenHorizontalPadding,
    marginTop: 16,
    paddingBottom: 23,
  },
  item: {
    alignItems: 'center',
    backgroundColor: color.whiteColor,
    flexDirection: 'row',
    height: componentUtil.mediumPressableItemSize(),
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f1f9'
  }
});

export default FacilitySearchListComponent;