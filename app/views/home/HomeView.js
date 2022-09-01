import React from 'react';

import GradientBackgroundComponent from '../../components/shared/GradientBackgroundComponent';
import HomeNavigationHeader from '../../components/home/HomeNavigationHeader';
import HomeHorizontalCardListComponent from '../../components/home/HomeHorizontalCardListComponent';
import HomeTiltedCardListComponent from '../../components/home/HomeTiltedCardListComponent';

const HomeView = () => {
  const renderBody = () => {
    return (
      <React.Fragment>
        <HomeHorizontalCardListComponent/>
        <HomeTiltedCardListComponent/>
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