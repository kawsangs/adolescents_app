import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import FacilityLogoComponent from '../facilities/FacilityLogoComponent';
import BoldLabelComponent from './BoldLabelComponent';
import CustomFlatListComponent from './CustomFlatListComponent';
import {getStyleOfDevice} from '../../utils/responsive_util';
import {descriptionFontSize} from '../../utils/font_size_util';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import {navigationRef} from '../../navigators/app_navigator';
import visitService from '../../services/visit_service';

const FacilityHorizontalListComponent = (props) => {
  const {t} = useTranslation();
  const viewDetail = (facility) => {
    visitService.recordVisitFacility(facility, () => {
      const facilityUuid = !!facility.uuid ? facility.uuid : facility.id
      navigationRef.current?.navigate('FacilityDetailView', {uuid: facilityUuid, isFromCategoryDetail: true})
    });
  }

  const renderItem = (facility, index) => {
    return <Card key={index} mode="elevated" elevation={cardElevation} onPress={() => viewDetail(facility)}
              style={[{borderRadius: cardBorderRadius, height: '100%', marginLeft: index == 0 ? 4 : 16, width: getStyleOfDevice(130, 100), paddingHorizontal: getStyleOfDevice(8, 4), paddingTop: 8}]}
           >
              <FacilityLogoComponent facility={facility} containerStyle={{flex: 0, height: 85}}
                customImageStyle={{width: '100%', height: getStyleOfDevice('90%', '80%')}}
              />
              <BoldLabelComponent label={facility.name} numberOfLines={2} style={{lineHeight: getStyleOfDevice(26, 23), textAlign: 'center'}} />
           </Card>
  }

  if (props.facilities.length == 0) return <View/>
    
  return (
    <View style={{marginTop: 12}}>
      <BoldLabelComponent label={`${t('clinic')}:`} style={{fontSize: descriptionFontSize()}} />

      <CustomFlatListComponent
        data={props.facilities}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={item => item.uuid}
        horizontal={true}
        customContentContainerStyle={[{paddingRight: 4, paddingBottom: 4, alignItems: 'center', height: 155, marginTop: 14}]}
      />
    </View>
  )
}

export default FacilityHorizontalListComponent;