import React, {useState, useEffect} from 'react';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import FacilityDetailServiceBottomSheetComponent from './FacilityDetailServiceBottomSheetComponent';
import FacilityDetailServiceTagItemComponent from './FacilityDetailServiceTagItemComponent';
import color from '../../themes/color';
import {xLargeFontSize, largeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';
import { servicesSnapPoints } from '../../constants/modal_constant';
import {screenHorizontalPadding} from '../../constants/component_constant';
import facilityServiceHelper from '../../helpers/facility_service_helper';

const FacilityDetailServiceTagsComponent = (props) => {
  const {t} = useTranslation();
  const [services, setServices] = useState(props.services);
  const [isOverflowService, setIsOverflowService] = useState(false);
  const [totalServiceWidth, setTotalServiceWidth] = useState(0);
  const [serviceWidths, setServiceWidths] = useState([]);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (isOverflowService)
      setServices(facilityServiceHelper.filterOverflowServices(props.services, containerWidth, serviceWidths));
  }, [containerWidth]);

  const calculateTotalServiceWidth = (width) => {
    setServiceWidths([...serviceWidths, width])
    // If the total width of the service >= the width of the display
    if ((totalServiceWidth + width) >= Dimensions.get('screen').width - (screenHorizontalPadding * 2))
      setIsOverflowService(true);

    setTotalServiceWidth(totalServiceWidth + width);
  }

  const renderTags = () => {
    let doms = [];
    services.map((service, index) => {
      doms.push(<FacilityDetailServiceTagItemComponent key={index} label={service} tagStyle={{marginTop: 0}}
                  onLayout={(event) => calculateTotalServiceWidth(event.nativeEvent.layout.width) } />
               )
    });
    return doms;
  }

  const showMore = () => {
    props.bottomSheetRef.current?.setSnapPoints(servicesSnapPoints);
    props.bottomSheetRef.current?.setBodyContent(<FacilityDetailServiceBottomSheetComponent services={props.services} />);
    props.modalRef.current?.present();
  }

  const arrowButton = () => {
    return <TouchableOpacity onPress={() => showMore()} style={{alignItems: 'flex-end', justifyContent: 'center', width: 48, height: componentUtil.mediumPressableItemSize()}}>
              <Icon name="chevron-right" color={color.primaryColor} size={28} />
           </TouchableOpacity>
  }

  return (
    <View>
      <BoldLabelComponent label={t('providedServices')} style={{fontSize: xLargeFontSize(), textAlign: 'center'}} />

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <View style={[{flex: 1, flexDirection: 'row', flexWrap: 'nowrap'}, !isOverflowService && {justifyContent: 'center'}]}
          onLayout={(event) => { setContainerWidth(event.nativeEvent.layout.width); }}
        >
          {renderTags()}
          { isOverflowService && <Text style={{alignSelf: 'flex-end', fontSize: largeFontSize()}}>...</Text> }
        </View>
        { isOverflowService && arrowButton() }
      </View>
    </View>
  )
}

export default FacilityDetailServiceTagsComponent;