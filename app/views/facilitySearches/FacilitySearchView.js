import React, {useState} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FacilitySearchHeaderComponent from '../../components/facilitySearches/FacilitySearchHeaderComponent';
import FacilitySearchListComponent from '../../components/facilitySearches/FacilitySearchListComponent';

const FacilitySearchView =() => {
  const [searchText, setSearchText] = useState('');
  const renderHeader = () => {
    return <FacilitySearchHeaderComponent searchText={searchText} updateSearch={(value) => setSearchText(value)} />
  }

  const renderBody = () => {
    return <FacilitySearchListComponent searchText={searchText} />
  }

  return (
     <GradientScrollViewComponent
        header={renderHeader()}
        body={renderBody()}
        // scrollViewStyle={isListView ? styles.listView : styles.mapView}
      />
  )
}

export default FacilitySearchView;