import React, {useState} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import SurveyContentComponent from '../../components/surveys/SurveyContentComponent';

const SurveyView = () => {
  const [playingUuid, setPlayingUuid] = useState(null);

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label='Survey' />}
      body={<SurveyContentComponent/>}
      // body={<SubCategoryItemsComponent items={subCategories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />}
      // scrollViewStyle={subCategories.length == 0 ? {paddingHorizontal: 0, paddingBottom: 0} : {}}
    />
  )
}

export default SurveyView;