import React, {useState} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import CardListComponent from '../../components/shared/CardListComponent';

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
      header={<NavigationHeaderWithBackButtonComponent label={category.name} onPress={() => onBackPress()} />}
      body={<CardListComponent items={subCategories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />}
      scrollViewStyle={subCategories.length == 0 ? {paddingHorizontal: 0, paddingBottom: 0} : {}}
    />
  )
}

export default SubCategoryView;