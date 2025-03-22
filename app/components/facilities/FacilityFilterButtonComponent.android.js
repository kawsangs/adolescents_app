import React from 'react';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import NavigationHeaderButtonComponent from '../shared/navigationHeaders/NavigationHeaderButtonComponent';
import NotifyBadgeComponent from '../shared/NotifyBadgeComponent';
import {navigationHeaderIconSize} from '../../constants/component_constant';
import {navigationRef} from '../../navigators/app_navigator';

const FacilityFilterButtonComponent = () => {
  const selectedProvince = useSelector(state => state.filterFacilityLocation.value.province);
  const appTheme = useSelector(state => state.appTheme.value);

  return (
    <React.Fragment>
      <View style={{position: 'relative'}}>
        <NavigationHeaderButtonComponent onPress={() => navigationRef.current?.navigate("FacilityFilterView")}
          icon={<IonIcon name="options-outline" size={navigationHeaderIconSize} color={appTheme.primary_text_color ?? 'white'}/>}
        />

        {!!selectedProvince && <NotifyBadgeComponent right={10} top={15} />}
      </View>
    </React.Fragment>
  )
}

export default FacilityFilterButtonComponent;