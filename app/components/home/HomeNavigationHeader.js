import React from 'react';
import {Appbar} from 'react-native-paper';

import HomeHeaderLeftButtonComponent from './HomeHeaderLeftButtonComponent';
import HomeHeaderTitleComponent from './HomeHeaderTitleComponent';
import HomeHeaderRightButtonsComponent from './HomeHeaderRightButtonsComponent';
import {navigationHeaderHorizontalPadding} from '../../constants/component_constant';

const HomeNavigationHeader = () => {
  return (
    <Appbar.Header style={{paddingRight: navigationHeaderHorizontalPadding}}>
      <HomeHeaderLeftButtonComponent/>
      <HomeHeaderTitleComponent/>
      <HomeHeaderRightButtonsComponent/>
    </Appbar.Header>
  )
}

export default HomeNavigationHeader;