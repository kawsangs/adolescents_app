import React from 'react';

import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import LeafCategoryCardListComponent from '../../components/leafCategories/LeafCategoryCardListComponent';
import Category from '../../models/Category';

const LeafCategoryView = ({route, navigation}) => {
  const category = new Category().findByUuid(route.params.uuid);

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={category.name} />}
      body={<LeafCategoryCardListComponent category={category} />}
    />
  )
}

export default LeafCategoryView;