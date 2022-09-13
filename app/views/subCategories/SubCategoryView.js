import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderButtonComponent';
import GridCardListComponent from '../../components/shared/GridCardListComponent';
import color from '../../themes/color';
import Category from '../../models/Category';

const SubCategoryView = ({route, navigation}) => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const category = Category.findByUuid(route.params.uuid);
  const subCategories = Category.getSubCategories(route.params.uuid);

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

  return (
    <GradientScrollViewComponent
      header={renderHeader()}
      body={<GridCardListComponent items={subCategories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />}
    />
  )
}

export default SubCategoryView;