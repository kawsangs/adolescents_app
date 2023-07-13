import React from 'react';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavigationHeaderButtonComponent from './NavigationHeaderButtonComponent';
import color from '../../../themes/color';

const NavigationHeaderMenuButtonComponent = (props) => {
  const userOccupation = useSelector(state => state.loginUserOccupation.value)

  return <View style={{flexDirection: 'row', height: '100%'}}>
              <NavigationHeaderButtonComponent onPress={() => props.navigation.openDrawer()}
                icon={<IonIcon name="reorder-two-outline" color={color.whiteColor} size={28} />}
              />
              { userOccupation == 'n_a' &&
                <View style={{width: 14, height: 14, backgroundColor: color.redColor, position: 'absolute', top: 14, right: 8, borderRadius: 16, justifyContent: 'center', alignItems: 'center'}}>
                  <Icon name='exclamation' size={9} color='white' />
                </View>
              }
           </View>
}

export default NavigationHeaderMenuButtonComponent;