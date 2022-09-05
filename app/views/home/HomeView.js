import React, {useState} from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import HomeNavigationHeader from '../../components/home/HomeNavigationHeader';
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
      header={<HomeNavigationHeader/>}
      body={renderBody()}
    />
  )
}

export default HomeView