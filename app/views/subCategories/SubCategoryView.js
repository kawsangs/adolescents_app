import React, {useState} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import GridCardListComponent from '../../components/shared/GridCardListComponent';
import Category from '../../models/Category';

const SubCategoryView = ({route, navigation}) => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const category = Category.findByUuid(route.params.uuid);
  const subCategories = Category.getSubCategories(route.params.uuid);

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={category.name} />}
      body={<GridCardListComponent items={subCategories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />}
    />
  )
}

export default SubCategoryView;