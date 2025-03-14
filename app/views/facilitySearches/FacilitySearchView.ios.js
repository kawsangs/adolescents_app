import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilitySearchHeaderComponent from '../../components/facilitySearches/FacilitySearchHeaderComponent';
import FacilitySearchListComponent from '../../components/facilitySearches/FacilitySearchListComponent';
import {gradientScrollViewPaddingBottom} from '../../constants/ios_component_constant';

const FacilitySearchView = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <GradientScrollViewComponent
      header={<FacilitySearchHeaderComponent searchText={searchText} updateSearchText={text => setSearchText(text)} />}
      body={<FacilitySearchListComponent searchText={searchText} updateSearchText={text => setSearchText(text)}/>}
      scrollViewStyle={styles.listView}
    />
  )
}

const styles = StyleSheet.create({
  listView: {
    paddingRight: 0,
    paddingBottom: gradientScrollViewPaddingBottom + 16
  },
});
export default FacilitySearchView;