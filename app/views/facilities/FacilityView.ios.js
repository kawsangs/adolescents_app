import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilityNavigationHeaderComponent from '../../components/facilities/FacilityNavigationHeaderComponent';
import FacilityListViewComponent from '../../components/facilities/FacilityListViewComponent';
import FacilityListMapViewComponent from '../../components/facilities/FacilityListMapViewComponent';
import {scrollViewPaddingBottom} from '../../constants/component_constant';

const FacilityView = (props) => {
  const [isListView, setIsListView] = useState(true);

  const renderBody = () => {
    return isListView ? <FacilityListViewComponent/> : <FacilityListMapViewComponent/>;
  }

  return (
    <GradientScrollViewComponent
      header={<FacilityNavigationHeaderComponent navigation={props.navigation} isListView={isListView} updateIsListView={(status) => setIsListView(status)} />}
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