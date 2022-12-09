import React from 'react';

import CreateAccountNavigationHeaderComponent from '../../components/createAccounts/CreateAccountNavigationHeaderComponent';
import CreateAccountFormComponent from '../../components/createAccounts/CreateAccountFormComponent';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FormBottomSheetModalComponent from '../../components/shared/FormBottomSheetModalComponent';
import {defaultPickerSnapPoints} from '../../constants/modal_constant';
import {gradientScrollViewBigPaddingBottom} from '../../constants/ios_component_constant';

const CreateAccountView = () => {
  let pickerRef = React.createRef();
  let pickerModalRef = React.createRef();

  return (
    <React.Fragment>
      <GradientScrollViewComponent
        header={<CreateAccountNavigationHeaderComponent/>}
        body={<CreateAccountFormComponent pickerRef={pickerRef} pickerModalRef={pickerModalRef} />}
        scrollViewStyle={{paddingBottom: gradientScrollViewBigPaddingBottom}}
      />

      <FormBottomSheetModalComponent ref={pickerRef} formModalRef={pickerModalRef} snapPoints={defaultPickerSnapPoints} onDismissModal={() => pickerRef.current?.setBodyContent(null)} />
    </React.Fragment>
  )
}

export default CreateAccountView;