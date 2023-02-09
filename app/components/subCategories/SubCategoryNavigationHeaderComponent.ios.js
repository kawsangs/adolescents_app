import React from 'react';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';
import SubCategoryDisplayModeButtonsComponent from './SubCategoryDisplayModeButtonsComponent';

const SubCategoryNavigationHeaderComponent = (props) => {
  return <NavigationHeaderComponent
            leftButton={<NavigationHeaderBackButtonComponent onPress={() => props.onPress()}/>}
            label={props.label}
            rightButton={<SubCategoryDisplayModeButtonsComponent isGridView={props.isGridView} updateIsGridView={props.updateIsGridView} clearAudio={props.clearAudio} />}
         />
}

export default SubCategoryNavigationHeaderComponent;