import React from 'react';
import {useTranslation} from 'react-i18next';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import TopicMainComponent from '../../components/topics/TopicMainComponent';
import {scrollViewPaddingBottom} from '../../constants/ios_component_constant';

const TopicView = (props) => {
  const {t} = useTranslation();
  const renderHeader = () => {
    return <NavigationHeaderComponent
              leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>}
              label={t('healthServiceHelp')}
           />
  }

  return (
    <GradientScrollViewComponent
      header={renderHeader()}
      body={<TopicMainComponent/>}
      scrollViewStyle={{paddingHorizontal: 0, paddingBottom: scrollViewPaddingBottom}}
    />
  )
}

export default TopicView;