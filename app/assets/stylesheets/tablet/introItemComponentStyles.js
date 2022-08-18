import { StyleSheet, Dimensions } from 'react-native';
import color from '../../../themes/color';
import { introViewPaddingHorizontal } from '../../../constants/component_constant' ;

const screenHeight = Dimensions.get('screen').height;

const introItemComponentStyles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.whiteColor,
    borderWidth: 2,
    // paddingHorizontal: introViewPaddingHorizontal
    paddingHorizontal: 44
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: color.blackColor,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 16,
    color: color.blackColor,
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  image: {
    width: '70%',
    height: 290,
    marginBottom: 30,
    marginTop: -(screenHeight / 8)
  }
});

export default introItemComponentStyles;