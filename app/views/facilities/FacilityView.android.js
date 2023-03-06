import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilityNavigationHeaderComponent from '../../components/facilities/FacilityNavigationHeaderComponent';
import FacilityListViewComponent from '../../components/facilities/FacilityListViewComponent';
import FacilityListMapViewComponent from '../../components/facilities/FacilityListMapViewComponent';

const FacilityView = (props) => {
  const [isListView, setIsListView] = useState(true);
  const [hasInternet, setHasInternet] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setHasInternet(state.isConnected && state.isInternetReachable)
    });

    return () => !!unsubscribe && unsubscribe();
  }, [])

  const renderBody = () => {
    return isListView ? <FacilityListViewComponent hasInternet={hasInternet} /> : <FacilityListMapViewComponent hasInternet={hasInternet} />;
  }

  return (
    <GradientScrollViewComponent
      header={<FacilityNavigationHeaderComponent navigation={props.navigation} isListView={isListView} updateIsListView={(status) => setIsListView(status)} />}
      isNotScrollView={true}
      body={renderBody()}
    />
  )
}

export default FacilityView;