import React from 'react';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';
import SubCategoryDisplayModeButtonsComponent from './SubCategoryDisplayModeButtonsComponent';
import {navigationRef} from '../../navigators/app_navigator';

const SubCategoryNavigationHeaderComponent = (props) => {
  const onPress = () => {
    navigationRef.current?.goBack();
    props.clearAudio();
  }

  return <NavigationHeaderComponent
            leftButton={<NavigationHeaderBackButtonComponent onPress={() => onPress()}/>}
            label={props.label}
            rightButton={<SubCategoryDisplayModeButtonsComponent isGridView={props.isGridView} updateIsGridView={props.updateIsGridView} clearAudio={props.clearAudio} />}
         />
}

export default SubCategoryNavigationHeaderComponent;