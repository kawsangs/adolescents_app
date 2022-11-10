import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

import color from '../../themes/color';
import {screenHorizontalPadding, cardBorderRadius} from '../../constants/component_constant';
import componentUtil from '../../utils/component_util';
import {largeFontSize} from '../../utils/font_size_util';
import facilitySearchService from '../../services/facility_search_service';
import visitService from '../../services/visit_service';
import {navigationRef} from '../../navigators/app_navigator';

const FacilitySearchListComponent = (props) => {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    setFacilities(props.searchText != '' ? facilitySearchService.findFacilityByNameOrService(props.searchText) : []);

  }, [props.searchText]);

  const viewDetail = (facility) => {
    visitService.recordVisitFacility(facility, () => {
      navigationRef.current?.navigate('FacilityDetailView', {uuid: facility.uuid})
      setTimeout(() => {
        props.updateIsSearching(false);
        props.updateSearchText("");
      }, 100);
    });
  }

  const renderListItems = () => {
    return facilities.map((facility, index) => {
      return (
        <TouchableOpacity key={index} style={styles.item}
          onPress={() => viewDetail(facility)}
        >
          <Text style={{fontSize: largeFontSize(), flex: 1}}>{facility.name}</Text>
        </TouchableOpacity>
      )
    });
  }

  const renderResult = () => {
    return (
      <React.Fragment>
        <View style={{height: 40, justifyContent: 'center'}}>
          <Text style={{color: '#fa60ad', fontSize: largeFontSize(), marginLeft: 12}}>លទ្ធផលស្វែងរក</Text>
        </View>
        { renderListItems() }
      </React.Fragment>
    )
  }

  if (facilities.length == 0) return <View/>

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