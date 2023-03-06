import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

import FacilityTagScrollBarComponent from './FacilityTagScrollBarComponent';
import FacilityScrollableListComponent from './FacilityScrollableListComponent';
import color from '../../themes/color';
import Facility from '../../models/Facility';
import FacilityImage from '../../models/FacilityImage';
import Tag from '../../models/Tag';
import {screenHorizontalPadding} from '../../constants/component_constant';
import facilityHelper from '../../helpers/facility_helper';
import {xxLargeFontSize} from '../../utils/font_size_util';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityListViewComponent = (props) => {
  const {t} = useTranslation();
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

  const renderEmptyMessage = () => {
    return <View style={{flexGrow: 1, marginRight: screenHorizontalPadding, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="file-text" size={getStyleOfDevice(110, 90)} color={color.whiteSmokeColor} style={{marginTop: getStyleOfDevice(80, 0)}} />
              <Text style={{fontSize: xxLargeFontSize(), color: color.whiteColor, marginTop: 10}}>{t('noResult')}</Text>
           </View>
  }

  const renderList = () => {
    return <FacilityScrollableListComponent facilities={facilities} facilityImages={facilityImages} hasInternet={props.hasInternet}
              reloadFacilityImages={() => setFacilityImages(FacilityImage.getAll())}
           />
  }

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <FacilityTagScrollBarComponent tags={tags} updateFacilityList={updateFacilityList} hasInternet={props.hasInternet} contentContainerStyle={{paddingRight: screenHorizontalPadding}}/>
      {facilities.length > 0 ? renderList() : renderEmptyMessage()}
    </View>
  )
}

export default FacilityListViewComponent;