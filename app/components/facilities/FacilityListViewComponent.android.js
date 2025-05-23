import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import FacilityScrollableListComponent from './FacilityScrollableListComponent';
import NoResultMessageComponent from '../shared/NoResultMessageComponent';
import TagScrollBarComponent from '../shared/tagScrollBars/TagScrollBarComponent';
import Facility from '../../models/Facility';
import DownloadedFile from '../../models/DownloadedFile';
import Tag from '../../models/Tag';
import {screenHorizontalPadding} from '../../constants/component_constant';
import facilityHelper from '../../helpers/facility_helper';

const FacilityListViewComponent = (props) => {
  const [facilities, setFacilities] = useState(Facility.getAll())
  const [facilityImages, setFacilityImages] = useState(DownloadedFile.getAllImages())
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
              reloadFacilityImages={() => setFacilityImages(DownloadedFile.getAllImages())}
              isMapView={props.isMapView}
           />
  }

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <TagScrollBarComponent tags={tags} onToggleFilter={updateFacilityList} hasInternet={props.hasInternet}
        contentContainerStyle={{paddingRight: screenHorizontalPadding}}
        type={'tag'}
      />
      {facilities.length > 0 ? renderList() : <NoResultMessageComponent/>}
    </View>
  )
}

export default FacilityListViewComponent;