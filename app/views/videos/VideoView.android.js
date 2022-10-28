import React from 'react';
import {useTranslation} from 'react-i18next';

import GradientViewComponent from '../../components/shared/GradientViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import VideoTabBarComponent from '../../components/videos/VideoTabBarComponent';
import color from '../../themes/color';

const VideoView = (props) => {
  const {t} = useTranslation();
  const renderHeader = () => {
    return <NavigationHeaderComponent
              leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>}
              label={t('video')}
           />
  }

  const renderTabBar = () => {
    return <VideoTabBarComponent/>
  }

  return (
    <GradientViewComponent style={{flexGrow: 1}}>
      <React.Fragment>
        {renderHeader()}
        {renderTabBar()}
      </React.Fragment>
    </GradientViewComponent>
  )
}

export default VideoView
