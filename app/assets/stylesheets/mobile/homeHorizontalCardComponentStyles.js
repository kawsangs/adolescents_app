import { StyleSheet } from 'react-native';
import { cardBorderRadius } from '../../../constants/component_constant';

const homeHorizontalCardComponentStyles = StyleSheet.create({
  container: {
    borderRadius: cardBorderRadius,
    height: 108,
    paddingLeft: 12,
    paddingRight: 4,
  }
});

export default homeHorizontalCardComponentStyles;