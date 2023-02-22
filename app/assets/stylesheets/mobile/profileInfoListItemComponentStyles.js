import {StyleSheet} from 'react-native';
import {descriptionFontSize} from '../../../constants/component_constant';

const profileInfoComponentStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 6
  },
  infoWrapper: {
    alignItems: 'center',
    flex: 10,
    flexDirection: 'row'
  },
  label: {
    fontSize: descriptionFontSize,
    flex: 6,
    marginTop: 4
  },
  valueWrapper: {
    alignItems: 'center',
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  valueLabel: {
    fontSize: descriptionFontSize,
    fontWeight: 'bold'
  },
  audioWrapper: {
    flex: 2
  }
});

export default profileInfoComponentStyles;