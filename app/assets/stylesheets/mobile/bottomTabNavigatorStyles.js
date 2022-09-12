import {StyleSheet} from 'react-native';
import color from '../../../themes/color';
import {screenHorizontalPadding} from '../../../constants/component_constant';
import {isLowPixelDensityDevice} from '../../../utils/responsive_util';

const BORDER_RADIUS = 12;

const bottomTabNavigatorStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    elevation: 0,
    height: isLowPixelDensityDevice() ? 58 : 62,
    paddingBottom: 6,
    paddingHorizontal: screenHorizontalPadding,
    position: 'absolute',
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