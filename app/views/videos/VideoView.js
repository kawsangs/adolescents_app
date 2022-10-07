import React from 'react';
import { Text, View } from 'react-native';
import {useTranslation} from 'react-i18next';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import VideoTabBarComponent from '../../components/videos/VideoTabBarComponent';

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
    <GradientScrollViewComponent
      header={renderHeader()}
      body={renderTabBar()}
      scrollViewStyle={{paddingHorizontal: 0}}
    />
  )
}

export default VideoView