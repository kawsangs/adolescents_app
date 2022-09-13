import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderButtonComponent';
import color from '../../themes/color';

const SubCategoryView = () => {
  const renderBackButton = () => {
    return <NavigationHeaderButtonComponent
              icon={<Icon name="chevron-left" color={color.whiteColor} size={30} />}
           />
  }

  const renderHeader = () => {
    return (
      <NavigationHeaderComponent
        leftButton={renderBackButton()}
        label="Sub component"
      />
    )
  }

  const renderBody = () => {
    return <View><Text>Sub category</Text></View>
  }

  return (
    <GradientScrollViewComponent
      header={renderHeader()}
      body={renderBody()}
    />
  )
}

export default SubCategoryView;