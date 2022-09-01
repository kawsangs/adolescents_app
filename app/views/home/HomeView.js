import React, {useState} from 'react';

import GradientBackgroundComponent from '../../components/shared/GradientBackgroundComponent';
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
    <GradientBackgroundComponent
      header={<HomeNavigationHeader/>}
      body={renderBody()}
    />
  )
}

export default HomeView