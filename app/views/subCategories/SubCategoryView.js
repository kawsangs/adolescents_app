import React, {useState} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import CardListComponent from '../../components/shared/CardListComponent';

import Category from '../../models/Category';

const SubCategoryView = ({route, navigation}) => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const category = new Category().findByUuid(route.params.uuid);
  const subCategories = new Category().getSubCategories(route.params.uuid);

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={category.name} />}
      body={<CardListComponent items={subCategories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />}
    />
  )
}

export default SubCategoryView;