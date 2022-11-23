import { StyleSheet, Platform } from 'react-native';
import color from '../../../themes/color';
import {xxLargeFontSize, xLargeFontSize} from '../../../utils/font_size_util';
import {isLowPixelDensityDevice} from '../../../utils/responsive_util';

const introItemComponentStyles = StyleSheet.create({
  slide: {
    alignItems: 'center',
    backgroundColor: color.whiteColor,
    flex: 1,
    flexDirection: 'column',
  },
  labelContainer: {
    alignSelf: 'flex-start',
    flex: 2,
    paddingHorizontal: 24,
    width: '100%',
  },
  title: {
    color: color.lightBlackColor,
    fontSize: xxLargeFontSize(),
    textAlign: 'left',
  },
  label: {
    color: color.blackColor,
    fontSize: xLargeFontSize(),
    lineHeight: 28,
    marginTop: 8,
    textAlign: 'left',
  },
  image: {
    marginBottom: 24,
    width: '100%',
    ...Platform.select({
      ios: {
        flex: isLowPixelDensityDevice() ? 4.1 : 4,
      },
      android: {
        flex: isLowPixelDensityDevice() ? 3.8 : 4
      }
    })
  }
});

export default introItemComponentStyles;