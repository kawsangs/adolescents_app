import { StyleSheet, Dimensions } from 'react-native';
import color from '../../../themes/color';

const screenHeight = Dimensions.get('screen').height;

const introItemComponentStyles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.whiteColor,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: color.blackColor,
  },
  label: {
    fontSize: 16,
    color: color.lightBlackColor,
    marginTop: 36,
  },
  image: {
    width: '70%',
    height: 290,
    marginBottom: 30,
    marginTop: -(screenHeight / 8)
  }
});

export default introItemComponentStyles;