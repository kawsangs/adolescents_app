import React from 'react';
import {useTranslation} from 'react-i18next';

// import GradientViewComponent from '../../components/shared/GradientViewComponent';
import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import TopicMainComponent from '../../components/topics/TopicMainComponent';
// import TopicTabBarComponent from '../../components/topics/TopicTabBarComponent';

const TopicView = (props) => {
  const {t} = useTranslation();
  const renderHeader = () => {
    return <NavigationHeaderComponent
              leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>}
              label={t('healthServiceConsulting')}
           />
  }

  return (
    <GradientScrollViewComponent
      header={renderHeader()}
      body={<TopicMainComponent/>}
      scrollViewStyle={{paddingHorizontal: 0, paddingBottom: 0}}
    />

    // UI with top tabs
    // <GradientViewComponent style={{flexGrow: 1}}>
    //   <React.Fragment>
    //     {renderHeader()}
    //     <TopicTabBarComponent/>
    //   </React.Fragment>
    // </GradientViewComponent>
  )
}

export default TopicView;