import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import color from '../../themes/color';
import Facility from '../../models/Facility';
import {screenHorizontalPadding} from '../../constants/component_constant';
import facilityHelper from '../../helpers/facility_helper';
import {xxLargeFontSize} from '../../utils/font_size_util';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityListViewComponent = () => {
  const {t} = useTranslation();
  const [playingUuid, setPlayingUuid] = useState(null);
  const [facilities, setFacilities] = useState(Facility.getAll());
  const [selectedServiceUuid, setSelectedServiceUuid] = useState(null);
  const filteredProvince = useSelector(state => state.filterFacilityLocation.value);

  useEffect(() => {
    updateFacilityList(selectedServiceUuid);
  }, [filteredProvince]);

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

  const updateFacilityList = (serviceUuid) => {
    setFacilities(facilityHelper.getFacilities(filteredProvince, serviceUuid));
    if (selectedServiceUuid != serviceUuid) setSelectedServiceUuid(serviceUuid);
  }

  const renderEmptyMessage = () => {
    return <View style={{flexGrow: 1, marginRight: screenHorizontalPadding, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="file-text" size={getStyleOfDevice(110, 90)} color={color.whiteSmokeColor} style={{marginTop: getStyleOfDevice(80, 0)}} />
              <Text style={{fontSize: xxLargeFontSize(), color: color.whiteColor, marginTop: 10}}>{t('noResult')}</Text>
           </View>
  }

  return (
    <View style={{flexGrow: 1}}>
      <FacilityServiceScrollBarComponent updateFacilityList={updateFacilityList} containerStyle={{paddingRight: screenHorizontalPadding}}/>
      {
        facilities.length > 0 ?
          <ScrollView contentContainerStyle={{paddingBottom: 4, paddingRight: screenHorizontalPadding}}>
            { renderFacilities() }
          </ScrollView>
        : renderEmptyMessage()
      }
    </View>
  )
}

export default FacilityListViewComponent;