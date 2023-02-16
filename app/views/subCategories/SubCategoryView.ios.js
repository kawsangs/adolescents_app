import React, {useState} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import SubCategoryNavigationHeaderComponent from '../../components/subCategories/SubCategoryNavigationHeaderComponent';
import SubCategoryItemsComponent from '../../components/subCategories/SubCategoryItemsComponent';
import Category from '../../models/Category';
import {gradientScrollViewBigPaddingBottom} from '../../constants/ios_component_constant';

const SubCategoryView = ({route}) => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const category = Category.findByUuid(route.params.uuid);
  const subCategories = Category.getSubCategories(route.params.uuid);

  return (
    <GradientScrollViewComponent
      header={<SubCategoryNavigationHeaderComponent label={category.name} clearAudio={() => setPlayingUuid(null)} />}
      body={<SubCategoryItemsComponent items={subCategories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />}
      scrollViewStyle={subCategories.length == 0 ? {paddingHorizontal: 0, paddingBottom: 0} : {paddingBottom: gradientScrollViewBigPaddingBottom}}
    />
  )
}

export default SubCategoryView;