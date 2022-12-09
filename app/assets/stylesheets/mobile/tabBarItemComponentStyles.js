import {StyleSheet, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {smallFontSize, mediumFontSize} from '../../../utils/font_size_util';
import {isLowPixelDensityDevice} from '../../../utils/responsive_util';

const TabBarItemComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: 50
  },
  itemContainer: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 12,
    paddingTop: 8
  },
  label: {
    fontSize: isLowPixelDensityDevice() ? mediumFontSize() - 1 : smallFontSize() + 1,
    marginTop: 2
  },
  focusedLine: {
    alignSelf: 'stretch',
    borderRadius: 6,
    height: 2.1,
    ...Platform.select({
      ios: {
        marginBottom:  DeviceInfo.hasNotch() ? 20 : 3,
      },
      android: {
        marginBottom: 0.6,
      }
    })
  }
});

export default TabBarItemComponentStyles;