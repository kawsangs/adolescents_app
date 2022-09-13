import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderButtonComponent';
import LeafCategoryCardListComponent from '../../components/leafCategories/LeafCategoryCardListComponent';
import color from '../../themes/color';
import Category from '../../models/Category';

const LeafCategoryView = ({route, navigation}) => {
  const category = Category.findByUuid(route.params.uuid);

  const renderBackButton = () => {
    return <NavigationHeaderButtonComponent
              onPress={() => navigation.goBack()}
              icon={<Icon name="chevron-left" color={color.whiteColor} size={30} />}
           />
  }

  const renderHeader = () => {
    return (
      <NavigationHeaderComponent
        leftButton={renderBackButton()}
        label={category.name}
      />
    )
  }

  const renderBody = () => {
    return <LeafCategoryCardListComponent category={category} />
  }

  return (
    <GradientScrollViewComponent
      header={renderHeader()}
      body={renderBody()}
    />
  )
}

export default LeafCategoryView;