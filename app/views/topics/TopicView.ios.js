import React, {useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import SearchableNavigationHeaderComponent from '../../components/shared/SearchableNavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import TopicMainComponent from '../../components/topics/TopicMainComponent';

const TopicView = (props) => {
  const {t} = useTranslation();
  const [searchText, setSearchText] = useState('');
  const renderHeader = () => {
    return <SearchableNavigationHeaderComponent
              leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>}
              label={t('healthServiceHelp')}
              searchText={searchText}
              updateSearchText={(text) => setSearchText(text)}
           />
  }

  return (
    <View style={{height: '100%'}}>
      <GradientScrollViewComponent
        header={renderHeader()}
        body={<TopicMainComponent searchText={searchText}/>}
        scrollViewStyle={{paddingHorizontal: 0}}
        isNotScrollView={true}
      />
    </View>
  )
}

export default TopicView;