import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

import FacilityTagScrollBarComponent from './FacilityTagScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import color from '../../themes/color';
import Facility from '../../models/Facility';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {scrollViewPaddingBottom} from '../../constants/ios_component_constant';
import facilityHelper from '../../helpers/facility_helper';
import {xxLargeFontSize} from '../../utils/font_size_util';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityListViewComponent = () => {
  const {t} = useTranslation();
  const [playingUuid, setPlayingUuid] = useState(null);
  const [facilities, setFacilities] = useState(Facility.getAll());
  const [selectedTagUuid, setSelectedTagUuid] = useState(null);
  const filteredLocation = useSelector(state => state.filterFacilityLocation.value);

  useEffect(() => {
    updateFacilityList(selectedTagUuid);
  }, [filteredLocation]);

  const renderFacilities = () => {
    return facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                containerStyle={{width: '100%'}}
                accessibilityLabel={`គ្លីនិកទី${index + 1}`}
             />
    });
  }

  const updateFacilityList = (tagUuid) => {
    setFacilities(facilityHelper.getFacilities(filteredLocation, tagUuid));
    if (selectedTagUuid != tagUuid) setSelectedTagUuid(tagUuid);
  }

  const renderEmptyMessage = () => {
    return <View style={{flexGrow: 1, marginRight: screenHorizontalPadding, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="file-text" size={getStyleOfDevice(110, 90)} color={color.whiteSmokeColor} />
              <Text style={{fontSize: xxLargeFontSize(), color: color.whiteColor, marginTop: 10}}>{t('noResult')}</Text>
           </View>
  }

  return (
    <View style={{flexGrow: 1}}>
      <FacilityTagScrollBarComponent updateFacilityList={updateFacilityList} containerStyle={{paddingRight: screenHorizontalPadding}}/>
      {
        facilities.length > 0 ?
          <ScrollView contentContainerStyle={{paddingBottom: scrollViewPaddingBottom, paddingRight: screenHorizontalPadding}}>
            { renderFacilities() }
          </ScrollView>
        : renderEmptyMessage()
      }
    </View>
  )
}

export default FacilityListViewComponent;