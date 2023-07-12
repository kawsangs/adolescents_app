import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeHeaderTitleComponent from './HomeHeaderTitleComponent';
import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import NavigationHeaderNotificationButtonComponent from '../shared/navigationHeaders/NavigationHeaderNotificationButtonComponent';
import color from '../../themes/color';

const HomeNavigationHeader = (props) => {
  const renderMenuBtn = () => {
    return <View style={{flexDirection: 'row', height: '100%'}}>
              <NavigationHeaderMenuButtonComponent navigation={props.navigation}/>
              { !loggedInUser.occupation &&
                <View style={{borderWidth: 0, width: 14, height: 14, backgroundColor: color.redColor, position: 'absolute', top: 14, right: 8, borderRadius: 16, justifyContent: 'center', alignItems: 'center'}}>
                  <Icon name='exclamation' size={9} color='white' />
                </View>
              }
           </View>
  }

  return (
    <NavigationHeaderComponent
      leftButton={renderMenuBtn()}
      customTitle={<HomeHeaderTitleComponent/>}
      rightButton={<NavigationHeaderNotificationButtonComponent/>}
    />
  )
}

export default HomeNavigationHeader;