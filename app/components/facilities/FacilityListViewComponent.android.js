import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import FacilityTagScrollBarComponent from './FacilityTagScrollBarComponent';
import FacilityScrollableListComponent from './FacilityScrollableListComponent';
import NoResultMessageComponent from '../shared/NoResultMessageComponent';
import Facility from '../../models/Facility';
import FacilityImage from '../../models/FacilityImage';
import Tag from '../../models/Tag';
import {screenHorizontalPadding} from '../../constants/component_constant';
import facilityHelper from '../../helpers/facility_helper';

const FacilityListViewComponent = (props) => {
  const [facilities, setFacilities] = useState(Facility.getAll())
  const [facilityImages, setFacilityImages] = useState(FacilityImage.getAll())
  const [tags] = useState(Tag.getAll());
  const [selectedTagUuid, setSelectedTagUuid] = useState(null);
  const filteredProvince = useSelector(state => state.filterFacilityLocation.value);

  useEffect(() => {
    updateFacilityList(selectedTagUuid);
  }, [filteredProvince]);

  const updateFacilityList = (tagUuid) => {
    setFacilities(facilityHelper.getFacilities(filteredProvince, tagUuid));
    if (selectedTagUuid != tagUuid) setSelectedTagUuid(tagUuid);
  }

  const renderList = () => {
    return <FacilityScrollableListComponent facilityImages={facilityImages} hasInternet={props.hasInternet} selectedTagUuid={selectedTagUuid}
              reloadFacilityImages={() => setFacilityImages(FacilityImage.getAll())}
           />
  }

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <FacilityTagScrollBarComponent tags={tags} updateFacilityList={updateFacilityList} hasInternet={props.hasInternet} contentContainerStyle={{paddingRight: screenHorizontalPadding}}/>
      {facilities.length > 0 ? renderList() : <NoResultMessageComponent/>}
    </View>
  )
}

export default FacilityListViewComponent;