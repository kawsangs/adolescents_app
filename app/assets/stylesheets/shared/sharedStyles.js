import {StyleSheet} from 'react-native';
import color from '../../../themes/color';

const sharedStyles = StyleSheet.create({
  requiredBorder: {
    borderWidth: 1.5,
    borderColor: color.requiredColor
  },
  boxShadow: {
    shadowColor: color.grayColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2
  }
});

export default sharedStyles;