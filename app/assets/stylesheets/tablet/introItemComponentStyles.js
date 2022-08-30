import { StyleSheet } from 'react-native';
import color from '../../../themes/color';

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
    fontSize: 25,
    textAlign: 'left',
  },
  label: {
    color: color.blackColor,
    fontSize: 16,
    marginTop: 8,
    textAlign: 'left',
  },
  image: {
    flex: 3,
    marginBottom: 24,
  }
});

export default introItemComponentStyles;