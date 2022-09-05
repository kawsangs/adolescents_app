import React from 'react';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderCloseButtonComponent from '../shared/navigationHeaders/NavigationHeaderCloseButtonComponent';

const CreateAccountNavigationHeaderComponent = () => {
  return <NavigationHeaderComponent
            leftButton={<NavigationHeaderCloseButtonComponent/>}
            label="ផ្ដល់អត្តសញ្ញាណ"
         />
}

export default CreateAccountNavigationHeaderComponent;