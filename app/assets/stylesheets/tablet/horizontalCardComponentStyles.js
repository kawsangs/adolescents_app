import { StyleSheet } from 'react-native';
import { cardBorderRadius } from '../../../constants/component_constant';

const horizontalCardComponentStyles = StyleSheet.create({
  container: {
    borderRadius: cardBorderRadius,
    height: 115,
    paddingLeft: 12,
    paddingRight: 4,
    width: '100%'
  }
});

export default horizontalCardComponentStyles;