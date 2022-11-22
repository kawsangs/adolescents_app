import {StyleSheet} from 'react-native';
import {cardBorderRadius, cardElevation} from '../../../constants/component_constant';

const gridCardComponentStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: cardBorderRadius,
    elevation: cardElevation,
    width: '48%',
    paddingLeft: 0,
    paddingBottom: 0
  },
  image: {
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius,
    height: 98,
    width: '100%',
  },
});

export default gridCardComponentStyles;