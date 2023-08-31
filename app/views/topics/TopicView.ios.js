import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import TopicMainComponent from '../../components/topics/TopicMainComponent';

const TopicView = (props) => {
  const {t} = useTranslation();
  const renderHeader = () => {
    return <NavigationHeaderComponent
              leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>}
              label={t('healthServiceHelp')}
           />
  }

  return (
    <View style={{height: '100%'}}>
      <GradientScrollViewComponent
        header={renderHeader()}
        body={<TopicMainComponent/>}
        scrollViewStyle={{paddingHorizontal: 0}}
        isNotScrollView={true}
      />
    </View>
  )
}

export default TopicView;