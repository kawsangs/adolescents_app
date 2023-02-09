import React, {useState} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import SubCategoryNavigationHeaderComponent from '../../components/subCategories/SubCategoryNavigationHeaderComponent';
import SubCategoryItemsComponent from '../../components/subCategories/SubCategoryItemsComponent';

import Category from '../../models/Category';
import {navigationRef} from '../../navigators/app_navigator';

const SubCategoryView = ({route, navigation}) => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const category = Category.findByUuid(route.params.uuid);
  const subCategories = Category.getSubCategories(route.params.uuid);

  const onBackPress = () => {
    setPlayingUuid(null);
    navigationRef.current?.goBack()
  }

  return (
    <GradientScrollViewComponent
      header={<SubCategoryNavigationHeaderComponent label={category.name} onPress={() => onBackPress()} />}
      body={<SubCategoryItemsComponent items={subCategories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />}
      scrollViewStyle={subCategories.length == 0 ? {paddingHorizontal: 0, paddingBottom: 0} : {}}
    />
  )
}

export default SubCategoryView;