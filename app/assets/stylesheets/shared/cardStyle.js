import { StyleSheet } from 'react-native';
import color from '../../../themes/color';

const cardStyle = StyleSheet.create({
  cardShadow: {
    shadowColor: color.blackColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  }
});

export default cardStyle;