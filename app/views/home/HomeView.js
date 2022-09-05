import React, {useState} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import HomeNavigationHeaderComponent from '../../components/home/HomeNavigationHeaderComponent';
import HomeHorizontalCardListComponent from '../../components/home/HomeHorizontalCardListComponent';
import HomeTiltedCardListComponent from '../../components/home/HomeTiltedCardListComponent';

const HomeView = () => {
  const [playingUuid, setPlayingUuid] = useState(null);

  const renderBody = () => {
    return (
      <React.Fragment>
        <HomeHorizontalCardListComponent playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}/>
        <HomeTiltedCardListComponent playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}/>
      </React.Fragment>
    )
  }

  return (
    <GradientScrollViewComponent
      header={<HomeNavigationHeaderComponent/>}
      body={renderBody()}
    />
  )
}

export default HomeView