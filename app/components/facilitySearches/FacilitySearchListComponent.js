import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

import FacilitySearchHistoryListComponent from './FacilitySearchHistoryListComponent';
import color from '../../themes/color';
import {cardBorderRadius} from '../../constants/component_constant';
import componentUtil from '../../utils/component_util';
import {largeFontSize} from '../../utils/font_size_util';
import facilitySearchService from '../../services/facility_search_service';

const FacilitySearchListComponent = (props) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    if (!props.searchText) return setResult([]);

    setResult(facilitySearchService.findServicesAndFacilities(props.searchText));
  }, [props.searchText]);

  const renderListItems = (result) => {
    // console.log('sub-result = ', result)

    return result.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={styles.item}>
          <Text style={{fontSize: largeFontSize(), flex: 1}}>{item.name}</Text>
        </TouchableOpacity>
      )
    });
  }

  const renderList = () => {
    // console.log('search result = ', result)
    let doms = [];
    for (let key in result) {
      // if (result[key].length == 0)
      //   continue;

      if (result[key].length > 0) {
        doms.push(
          <View key={key} style={{backgroundColor: 'transparent', height: 33, justifyContent: 'center', paddingLeft: 12}}>
            <Text style={{color: '#ebadd2', fontSize: largeFontSize()}}>{key}</Text>
          </View>
        );

        doms.push(renderListItems(result[key]));
      }
    }

    return doms;


    // return (
    //   <View>
    //     <View style={{backgroundColor: 'transparent', height: 33, justifyContent: 'center', paddingLeft: 12}}>
    //       <Text style={{color: '#ebadd2', fontSize: largeFontSize()}}>លទ្ធផលស្វែងរក</Text>
    //     </View>
    //     {renderListItems(result)}
    //   </View>
    // )
  }

  return !!props.searchText ? <View style={styles.container}>{ renderList()}</View> : <FacilitySearchHistoryListComponent/>
}

const styles = StyleSheet.create({
  container: {
    borderRadius: cardBorderRadius,
    backgroundColor: '#f4f1f9',
    elevation: 2,
    marginTop: 16,
    paddingBottom: 23
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