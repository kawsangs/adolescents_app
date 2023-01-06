import React from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import NavigationHeaderButtonComponent from '../shared/navigationHeaders/NavigationHeaderButtonComponent';
import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import FacilityFilterLocationBottomSheetComponent from './FacilityFilterLocationBottomSheetComponent';

const FacilityFilterButtonComponent = (props) => {
  let bottomSheetRef = React.createRef();
  let modalRef = React.createRef();

  const showFilter = () => {
    bottomSheetRef.current?.setBodyContent(<FacilityFilterLocationBottomSheetComponent />);
    modalRef.current?.present();
  }

  return (
    <React.Fragment>
      <NavigationHeaderButtonComponent onPress={() => showFilter()}
        icon={<IonIcon name="options-outline" size={20} color="white"/>}
      />

      <FormBottomSheetModalComponent ref={bottomSheetRef} formModalRef={modalRef} snapPoints={['75%']} onDismiss={() => bottomSheetRef.current?.setBodyContent(null)} />
    </React.Fragment>
  )
}

export default FacilityFilterButtonComponent;