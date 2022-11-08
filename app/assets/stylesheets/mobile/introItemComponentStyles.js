import { StyleSheet } from 'react-native';
import color from '../../../themes/color';
import {xxLargeFontSize, xLargeFontSize} from '../../../utils/font_size_util';

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
    flex: 3.5,
    marginBottom: 24,
    width: '100%'
  }
});

export default introItemComponentStyles;