import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';

import FacilityLogoComponent from '../facilities/FacilityLogoComponent';
import BoldLabelComponent from './BoldLabelComponent';
import CustomFlatListComponent from './CustomFlatListComponent';
import {getStyleOfDevice} from '../../utils/responsive_util';
import {descriptionFontSize} from '../../utils/font_size_util';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';

const FacilityHorizontalListComponent = (props) => {

  const viewDetail = () => {
    console.log('view detail =====')
  }

  const renderItem = (item, index) => {
    return <Card key={index} mode="elevated" elevation={cardElevation} onPress={() => viewDetail()}
              style={[{borderRadius: cardBorderRadius, height: '100%', marginLeft: index == 0 ? 4 : 16, width: 100, paddingHorizontal: 4, paddingTop: 8}]}
           >
              <FacilityLogoComponent facility={item} containerStyle={{flex: 0, height: 85}}
                customImageStyle={{width: '100%', height: '80%'}}
              />
              <BoldLabelComponent label={item.name} numberOfLines={2} style={{lineHeight: getStyleOfDevice(26, 23), textAlign: 'center'}} />
           </Card>
  }

  return (
    <View style={{marginTop: 12}}>
      <BoldLabelComponent label='គ្លីនិក:' style={{fontSize: descriptionFontSize()}} />

      <CustomFlatListComponent
        data={props.facilities}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={item => item.uuid}
        horizontal={true}
        customContentContainerStyle={[{paddingRight: 4, paddingBottom: 4, alignItems: 'center', height: 155, marginTop: 10}]}
      />
    </View>
  )
}

export default FacilityHorizontalListComponent;