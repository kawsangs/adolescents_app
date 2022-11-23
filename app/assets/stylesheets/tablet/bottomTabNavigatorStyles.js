import {StyleSheet, Platform} from 'react-native';
import color from '../../../themes/color';
import {screenHorizontalPadding} from '../../../constants/component_constant';

const BORDER_RADIUS = 12;

const bottomTabNavigatorStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    elevation: 0,
    paddingHorizontal: screenHorizontalPadding,
    position: 'absolute',
    ...Platform.select({
      ios: {
        height: 74,
        paddingBottom: 0
      },
      android: {
        height: 62,
        paddingBottom: 6,
      }
    })
  },
  tabBarItem: {
    backgroundColor: color.whiteColor,
    opacity: 0.98,
    marginRight: -1
  },
  tabBarLeftItem: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
    marginRight: -1,
  },
  tabBarRightItem: {
    borderBottomRightRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS
  }
});

export default bottomTabNavigatorStyles;