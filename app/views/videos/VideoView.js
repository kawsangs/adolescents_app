import React from 'react';
import { View } from 'react-native';
import {useTranslation} from 'react-i18next';

import GradientViewComponent from '../../components/shared/GradientViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import VideoTabBarComponent from '../../components/videos/VideoTabBarComponent';
import color from '../../themes/color';

const VideoView = (props) => {
  const {t} = useTranslation();
  const renderHeader = () => {
    return (
      <View>
        <NavigationHeaderComponent
          leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>}
          label={t('video')}
        />
      </View>
    )
  }

  const renderTabBar = () => {
    return <VideoTabBarComponent/>
  }

  return (
    <GradientViewComponent colors={[color.primaryColor, 'rgba(170, 73, 133, 0.88)']}
      style={{flexGrow: 1}}
    >
      <React.Fragment>
        {renderHeader()}
        {renderTabBar()}
      </React.Fragment>
    </GradientViewComponent>
  )
}

export default VideoView