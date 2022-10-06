import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilityNavigationHeaderComponent from '../../components/facilities/FacilityNavigationHeaderComponent';
import FacilitySearchHeaderComponent from '../../components/facilities/FacilitySearchHeaderComponent';
import FacilityListViewComponent from '../../components/facilities/FacilityListViewComponent';
import FacilityListMapViewComponent from '../../components/facilities/FacilityListMapViewComponent';
import FacilitySearchListComponent from '../../components/facilities/FacilitySearchListComponent';
import {scrollViewPaddingBottom} from '../../constants/component_constant';

const FacilityView = (props) => {
  const [isListView, setIsListView] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const renderBody = () => {
    if (isSearching) return <FacilitySearchListComponent/>

    return isListView ? <FacilityListViewComponent/> : <FacilityListMapViewComponent/>;
  }

  const renderHeader = () => {
    if (isSearching)
      return <FacilitySearchHeaderComponent/>

    return <FacilityNavigationHeaderComponent navigation={props.navigation} isListView={isListView} isSearching={isSearching}
            updateIsListView={(status) => setIsListView(status)} updateIsSearching={(status) => setIsSearching(status)} />
  }

  return (
    <GradientScrollViewComponent
      header={renderHeader()}
      body={renderBody()}
      scrollViewStyle={isListView ? styles.listView : styles.mapView}
    />
  )
}

const styles = StyleSheet.create({
  listView: {
    paddingRight: 0,
    paddingBottom: scrollViewPaddingBottom - 8
  },
  mapView: {
    paddingHorizontal: 0,
    paddingBottom: 0
  }
});

export default FacilityView;