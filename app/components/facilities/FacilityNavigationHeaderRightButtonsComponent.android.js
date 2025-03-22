import React from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import NavigationHeaderButtonComponent from '../shared/navigationHeaders/NavigationHeaderButtonComponent';
import FacilityFilterButtonComponent from './FacilityFilterButtonComponent';
import {navigationRef} from '../../navigators/app_navigator';

const FacilityNavigationHeaderRightButtonsComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  const iconColor = appTheme.primary_text_color ?? 'white';
  return (
    <View style={{flexDirection: 'row', height: '100%'}}>
      <NavigationHeaderButtonComponent onPress={() => navigationRef.current?.navigate("FacilitySearchView")}
        icon={<FeatherIcon name="search" size={20} color={iconColor}/>}
      />

      { props.isListView ?
        <NavigationHeaderButtonComponent onPress={() => props.updateIsListView(false)}
          icon={<FeatherIcon name="map" size={20} color={iconColor}/>}
        />
        :
        <NavigationHeaderButtonComponent onPress={() => props.updateIsListView(true)}
          icon={<IonIcon name="list-sharp" size={20} color={iconColor}/>}
        />
      }
      <FacilityFilterButtonComponent/>
    </View>
  )
}

export default FacilityNavigationHeaderRightButtonsComponent;