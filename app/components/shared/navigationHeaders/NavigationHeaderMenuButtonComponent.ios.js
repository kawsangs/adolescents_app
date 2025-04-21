import React from 'react';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

import NavigationHeaderButtonComponent from './NavigationHeaderButtonComponent';
import NoticeBadgeComponent from '../NoticeBadgeComponent';
import color from '../../../themes/color';
import User from '../../../models/User';

const NavigationHeaderMenuButtonComponent = (props) => {
  const userOccupation = useSelector(state => state.loginUserOccupation.value)

  return <View style={{flexDirection: 'row', height: '100%'}}>
              <NavigationHeaderButtonComponent onPress={() => props.navigation.openDrawer()}
                icon={<IonIcon name="reorder-two-outline" color={color.whiteColor} size={28} />}
              />
              { (!User.isLoginAsAnonymous() && userOccupation == 'n_a') && <NoticeBadgeComponent/> }
           </View>
}

export default NavigationHeaderMenuButtonComponent;