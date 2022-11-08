import React from 'react';
import {useTranslation} from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BottomSheetModalMainComponent from '../shared/BottomSheetModalMainComponent';
import FacilityDetailContactBottomSheetItemComponent from './FacilityDetailContactBottomSheetItemComponent';
import { contactContentHeight } from '../../constants/modal_constant';

const FacilityDetailContactBottomSheetComponent = (props) => {
  const {t} = useTranslation();
  const renderListItem = () => {
    // return props.numbers.map((number, index) => {
    //   return <FacilityDetailContactBottomSheetItemComponent key={`contact-number-${index}`} number={number} />
    // });

    return props.items.map((item, index) => {
      return <FacilityDetailContactBottomSheetItemComponent key={`contact-${index}`} item={item} type={props.type} icon={props.icon} />
    })
  }

  const title = {
    phone: t('contactNumber'),
    website: t('website'),
    facebook: t('facebook')
  }

  return (
    <BottomSheetModalMainComponent
      title={title[props.type]}
      containerStyle={{height: hp(contactContentHeight)}}
      scrollViewStyle={{paddingHorizontal: 0}}
    >
      {renderListItem()}
    </BottomSheetModalMainComponent>
  )
}

export default FacilityDetailContactBottomSheetComponent;