import React from 'react';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import NavigationHeaderButtonComponent from '../shared/navigationHeaders/NavigationHeaderButtonComponent';
import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import NotifyBadgeComponent from '../shared/NotifyBadgeComponent';
import FacilityFilterLocationBottomSheetComponent from './FacilityFilterLocationBottomSheetComponent';
import {defaultPickerSnapPoints} from '../../constants/modal_constant';

const FacilityFilterButtonComponent = (props) => {
  let bottomSheetRef = React.createRef();
  let modalRef = React.createRef();
  const selectedProvince = useSelector(state => state.filterFacilityLocation.value);

  const showFilter = () => {
    bottomSheetRef.current?.setBodyContent(<FacilityFilterLocationBottomSheetComponent modalRef={modalRef} />);
    modalRef.current?.present();
  }

  return (
    <React.Fragment>
      <View style={{position: 'relative'}}>
        <NavigationHeaderButtonComponent onPress={() => showFilter()}
          icon={<IonIcon name="options-outline" size={20} color="white"/>}
        />

        {!!selectedProvince && <NotifyBadgeComponent right={10} top={15} />}
      </View>

      <FormBottomSheetModalComponent ref={bottomSheetRef} formModalRef={modalRef} snapPoints={defaultPickerSnapPoints} onDismiss={() => bottomSheetRef.current?.setBodyContent(null)} />
    </React.Fragment>
  )
}

export default FacilityFilterButtonComponent;