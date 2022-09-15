import React from 'react';
import {Appbar} from 'react-native-paper';

import HomeHeaderLeftButtonComponent from './HomeHeaderLeftButtonComponent';
import HomeHeaderTitleComponent from './HomeHeaderTitleComponent';
// import HomeHeaderRightButtonsComponent from './HomeHeaderRightButtonsComponent';
import {navigationHeaderHorizontalPadding} from '../../constants/component_constant';

const HomeNavigationHeader = (props) => {
  const openDrawer = () => {
    console.log('open drawer =====')
    props.navigation.openDrawer();
  }

  return (
    <Appbar.Header style={{paddingHorizontal: navigationHeaderHorizontalPadding, elevation: 0}}>
      <HomeHeaderLeftButtonComponent onPress={() => openDrawer()}/>
      <HomeHeaderTitleComponent/>
      {/* <HomeHeaderRightButtonsComponent/> */}
    </Appbar.Header>
  )
}

export default HomeNavigationHeader;