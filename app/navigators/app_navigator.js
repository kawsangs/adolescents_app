import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainView from '../views/main/MainView';
import IntroductionView from '../views/introductions/IntroductionView';
import LoginSelectionView from '../views/loginSelections/LoginSelectionView';
import CreateAccountView from '../views/createAccounts/CreateAccountView';
import LeafCategoryDetailView from '../views/leafCategoryDetails/LeafCategoryDetailView';
import FacilitySearchView from '../views/facilitySearches/FacilitySearchView';
import FacilityDetailView from '../views/facilityDetails/FacilityDetailView';
import FacilityFilterView from '../views/facilityFilters/FacilityFilterView';
import DrawerNavigator from './drawer_navigator';

const Stack = createNativeStackNavigator();

function AppNaviator() {


  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName='MainView'
      >
        <Stack.Screen
          name="MainView"
          component={MainView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Group>
          <Stack.Screen
            name="IntroductionView"
            component={IntroductionView}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="LoginSelectionView"
            component={LoginSelectionView}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CreateAccountView"
            component={CreateAccountView}
            options={{
              header: () => null,
            }}
          />
        </Stack.Group>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="LeafCategoryDetailView"
          component={LeafCategoryDetailView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="FacilitySearchView"
          component={FacilitySearchView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="FacilityDetailView"
          component={FacilityDetailView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="FacilityFilterView"
          component={FacilityFilterView}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const navigationRef = React.createRef();

export default AppNaviator;
