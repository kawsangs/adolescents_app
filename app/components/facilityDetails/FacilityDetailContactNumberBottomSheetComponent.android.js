import React from 'react';
import {useTranslation} from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BottomSheetModalMainComponent from '../shared/BottomSheetModalMainComponent';
import FacilityDetailContactNumberBottomSheetItemComponent from './FacilityDetailContactNumberBottomSheetItemComponent';
import { contactNumbersContentHeight } from '../../constants/modal_constant';

const FacilityDetailContactNumberBottomSheetComponent = (props) => {
  const {t} = useTranslation();
  const renderListItem = () => {
    return props.numbers.map((number, index) => {
      return <FacilityDetailContactNumberBottomSheetItemComponent key={`contact-number-${index}`} number={number} />
    });
  }

  return (
    <BottomSheetModalMainComponent
      title={t('contactNumber')}
      containerStyle={{height: hp(contactNumbersContentHeight)}}
      scrollViewStyle={{paddingHorizontal: 0}}
    >
      {renderListItem()}
    </BottomSheetModalMainComponent>
  )
}

export default FacilityDetailContactNumberBottomSheetComponent;