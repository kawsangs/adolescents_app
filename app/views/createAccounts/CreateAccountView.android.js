import React from 'react';

import CreateAccountNavigationHeaderComponent from '../../components/createAccounts/CreateAccountNavigationHeaderComponent';
import CreateAccountFormComponent from '../../components/createAccounts/CreateAccountFormComponent';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import FormBottomSheetModalComponent from '../../components/shared/FormBottomSheetModalComponent';
import {getStyleOfDevice} from '../../utils/responsive_util';

const CreateAccountView = () => {
  let pickerRef = React.createRef();
  let pickerModalRef = React.createRef();
  const pickerSnapPoints = getStyleOfDevice(['60%', '100%'], ['65%', '100%'])

  return (
    <React.Fragment>
      <GradientScrollViewComponent
        header={<CreateAccountNavigationHeaderComponent/>}
        body={<CreateAccountFormComponent pickerRef={pickerRef} pickerModalRef={pickerModalRef} />}
        scrollViewStyle={{paddingBottom: 16}}
      />

      <FormBottomSheetModalComponent ref={pickerRef} formModalRef={pickerModalRef} snapPoints={pickerSnapPoints} onDismissModal={() => pickerRef.current?.setBodyContent(null)} />
    </React.Fragment>
  )
}

export default CreateAccountView;