import React from 'react';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';

const QuestionNavigationHeaderComponent = (props) => {
  return (
      <NavigationHeaderComponent
        leftButton={<NavigationHeaderBackButtonComponent onPress={() => props.onPress()}/>}
        label={props.label}
      />
    )
}

export default QuestionNavigationHeaderComponent;