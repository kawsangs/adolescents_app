import React from 'react';
import {useTranslation} from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BottomSheetModalMainComponent from '../shared/BottomSheetModalMainComponent';
import FacilityDetailServiceTagItemComponent from './FacilityDetailServiceTagItemComponent';
import { servicesContentHeight } from '../../constants/modal_constant';

const FacilityDetailServiceBottomSheetComponent = (props) => {
  const {t} = useTranslation();
  const renderServices = () => {
    let doms = [];
    props.services.map((service, index) => {
      doms.push(<FacilityDetailServiceTagItemComponent key={`service-${index}`} label={service} />)
    });

    return doms;
  }

  return (
    <BottomSheetModalMainComponent
      title={t('providedServices')}
      containerStyle={{height: hp(servicesContentHeight)}}
      scrollViewStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
    >
      { renderServices() }
    </BottomSheetModalMainComponent>
  )
}

export default FacilityDetailServiceBottomSheetComponent;