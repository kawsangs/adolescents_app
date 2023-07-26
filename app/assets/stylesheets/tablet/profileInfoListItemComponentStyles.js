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
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        paddingTop: 3
      }
    })
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
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        paddingTop: 3
      }
    })
  },
  valueLabel: {
    fontSize: descriptionFontSize,
    fontWeight: 'bold'
  },
  audioWrapper: {
    alignItems: 'flex-end',
    flex: 2,
    paddingRight: 4
  }
});

export default profileInfoComponentStyles;